<template>
  <div class="panel">

    <div class="heading">
      <h2>订单页面</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><a href="#/app">后台首页</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="#/app/order">订单管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>订单列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="search">
      <div class="options">

        <el-button v-if="ids.length" type="danger" size="small" @click="batchDel">批量删除</el-button>

        <el-select v-model.number="state" placeholder="是否审核" size="small" clearable="">
          <el-option label="未审核"  :value="0" />
          <el-option label="已审核"  :value="1" />
        </el-select>

        <el-input v-model.trim="keyword" placeholder="请输入订单编号" size="small" clearable />
      </div>
      <el-button type="danger" icon="el-icon-plus" size="small" @click="addItem">新增</el-button>
    </div>

    <div class="list">
      <el-table ref="table" :data="searchData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />

        <el-table-column label="订单编号" prop="orderno" />
        <el-table-column label="订单状态" prop="state" :formatter="formatState" />
        <el-table-column label="支付方式" prop="paytype" :formatter="formatPaytype" />
        <el-table-column label="订单总金额" prop="amount" />
        <el-table-column label="订单提交时间" prop="addtime" :formatter="formatTime" />
        <el-table-column label="提交用户" prop="userid" />

        <el-table-column label="操作" align="right">
          <template v-slot="scope">
            <el-button size="mini" @click="editItem(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="delItem(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <el-dialog
    :title="(form.id?'修改':'新增')+'订单'"
    :visible.sync="dialogVisible"
    width="36%"
    top="10vh">

      <el-form ref="form" :model="form" :rules="rules" label-width="100px">

        <el-form label-width="100px">
          <el-form-item label="订单编号" prop="orderno">
            <el-input v-model="form.orderno"></el-input>
          </el-form-item>

          <el-form-item label="订单状态" prop="state">
          <el-radio v-model.number="form.state" :label="0">待付款</el-radio>
          <el-radio v-model.number="form.state" :label="1">待收货</el-radio>
          <el-radio v-model.number="form.state" :label="2">待评价</el-radio>
          <el-radio v-model.number="form.state" :label="3">退货/退款</el-radio>
          </el-form-item>

          <el-form-item label="支付方式" prop="paytype">
          <el-radio v-model.number="form.paytype" :label="0">在线付款</el-radio>
          <el-radio v-model.number="form.paytype" :label="1">货到付款</el-radio>
          </el-form-item>

          <el-form-item label="订单总金额" prop="amount">
            <el-input v-model="form.amount"></el-input>
          </el-form-item>

          <el-form-item label="订单添加时间" prop="addtime">
            <el-input v-model="form.addtime"></el-input>
          </el-form-item>

          <el-form-item label="提交用户" prop="userid">
            <el-input-number :min="1" v-model="form.userid"></el-input-number>
          </el-form-item>

          <!-- <el-form-item label="是否审核" prop="state">
            <el-switch
            v-model="form.state"
            :active-value="1"
            :inactive-value="0">
            </el-switch>
          </el-form-item> -->

        </el-form>

      </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible=false">取消</el-button>
          <el-button type="primary" @click="save">确定</el-button>
        </span>

    </el-dialog>

  </div>
</template>

<script>
import { formatstamp } from '../utils/index'
export default {
  data () {
    return {
      state: '',
      keyword: '',
      tableData: [],
      ids: [],
      dialogVisible: false,
      form: {},
      rules: {
        name: { required: true, message: '请输入订单名称' }
      }
    }
  },

  created () {
    this.getList()
  },
  computed: {
    searchData () {
      return this.tableData.filter(item => {
        const cd1 = this.state !== '' ? (item.state === this.state) : true
        const cd2 = this.keyword !== '' ? new RegExp(this.keyword, 'ig').test(item.name) : true
        return cd1 && cd2
      })
    }
  },
  methods: {
    formatState (row) {
      return ['待付款', '待收货', '待评价', '退货/退款'][row.state]
    },
    formatPaytype (row) {
      return ['在线付款', '货到付款'][row.paytype]
    },
    formatTime (row) {
      return formatstamp(row.addtime)
    },
    handelChange (state, id) {
      this.$http.post('order/state', { state, id }).then(res => {
        if (res.result.err > 0) {
          this.$message.error(res.result.msg)
        } else {
          this.$message.success(res.result.msg)
        }
      })
    },
    handleSelectionChange (ids) {
      this.ids = ids.map(item => item.id)
    },
    getList () {
      this.$http.get('order/list').then(res => {
        this.tableData = res.result
      })
    },
    addItem () {
      this.form = { id: 0, order: 1 }
      this.dialogVisible = true
    },
    editItem (row) {
      this.form = { ...row }
      this.dialogVisible = true
    },
    delItem (id) {
      this.$confirm('您确定要删除此条记录吗？', '提示').then(() => {
        this.$http.post('order/remove', { id }).then(res => {
          if (res.result.err > 0) {
            this.$message.error(res.result.msg)
          } else {
            this.$message.success(res.result.msg)
            this.getList()
          }
        }).catch(() => {})
      })
    },
    batchDel () {
      this.$confirm('您确定要删除所选的记录吗？', '提示').then(() => {
        this.$http.post('order/remove', { id: this.ids }).then(res => {
          if (res.result.err > 0) {
            this.$message.error(res.result.msg)
          } else {
            this.$message.success(res.result.msg)
            this.getList()
          }
        })
      }).catch(() => {
        this.$refs.table.clearSelection()
      })
    },
    save () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$http.post('order/save', { ...this.form }).then(res => {
            if (res.result.err > 0) {
              this.$message.error(res.result.msg)
            } else {
              this.$message.success(res.result.msg)
              this.getList()
              this.dialogVisible = false
            }
          })
        }
      })
    }
  }
}
</script>

<style>
</style>
