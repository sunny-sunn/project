<template>
  <div class="panel">

    <div class="heading">
      <h2>优惠券页面</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><a href="#/app">后台首页</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="#/app/coupon">优惠券管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>优惠券列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="search">
      <div class="options">

        <el-button v-if="ids.length" type="danger" size="small" @click="batchDel">批量删除</el-button>

        <el-select v-model.number="state" placeholder="是否审核" size="small" clearable="">
          <el-option label="未审核"  :value="0" />
          <el-option label="已审核"  :value="1" />
        </el-select>

        <el-input v-model.trim="keyword" placeholder="请输入优惠券名称" size="small" clearable />
      </div>
      <el-button type="danger" icon="el-icon-plus" size="small" @click="addItem">新增</el-button>
    </div>

    <div class="list">
      <el-table ref="table" :data="searchData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column label="排序" prop="order" width="60" />
        <el-table-column label="优惠券名称" prop="title" />
        <el-table-column label="优惠券图片" prop="picurl" width="180">
          <template v-slot="scope">
            <el-image style="width:150px height:100px" :src="scope.row.picurl" :preview-src-list="[scope.row.picurl]" />
          </template>
        </el-table-column>
        <el-table-column label="起始时间" prop="endtime" width="180" />
        <el-table-column label="添加时间" prop="addtime" :formatter="formatTime" width="180" />
        <el-table-column label="审核" width="80">
          <template v-slot="scope">
            <el-switch v-model="scope.row.state" :active-value="1" :inactive-value="0" @change="handelChange($event,scope.row.id)" />
          </template>
        </el-table-column>

        <el-table-column label="操作" align="right">
          <template v-slot="scope">
            <el-button size="mini" @click="editItem(scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="delItem(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

    <el-dialog
    :title="(form.id?'修改':'新增')+'优惠券'"
    :visible.sync="dialogVisible"
    width="36%"
    top="10vh">

      <el-form ref="form" :model="form" :rules="rules" label-width="100px">

        <el-form label-width="100px">
          <el-form-item label="优惠券名称" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>

          <el-form-item label="上传图片" prop="picurl">
            <el-tooltip class="item" effect="dark" content="请上传150x100的图片尺寸！" placement="right-start">
              <el-upload
              class="pic-upload size150x100"
              action="http://cloud.scnew.com.cn/api/user/upload"
              :before-upload="handleBeforeUpload"
              :on-success="handlePicSuccess"
              :show-file-list="false">
                <img v-if="form.picurl" :src="form.picurl">
                <i v-else class="el-icon-plus"></i>
              </el-upload>
            </el-tooltip>
          </el-form-item>

          <el-form-item label="起始时间" prop="endtime">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.endtime"></el-date-picker>
          </el-form-item>

          <el-form-item label="排序号码" prop="order">
            <el-input-number :min="1" v-model="form.order"></el-input-number>
          </el-form-item>

          <el-form-item label="是否审核" prop="state">
            <el-switch
            v-model="form.state"
            :active-value="1"
            :inactive-value="0">
            </el-switch>
          </el-form-item>

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
        title: { required: true, message: '请输入标题' },
        picurl: { required: true, message: '请上传图图片' }
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
        const cd2 = this.keyword !== '' ? new RegExp(this.keyword, 'ig').test(item.title) : true
        return cd1 && cd2
      })
    }
  },
  methods: {
    formatTime (row) {
      return formatstamp(row.addtime)
    },
    handelChange (state, id) {
      this.$http.post('coupon/state', { state, id }).then(res => {
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
    handleBeforeUpload (file) {
      const type = file.type.split('/')[1].toLowerCase()
      const isPic = ['jpeg', 'png', 'gif', 'jpg', 'webp']
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isPic.includes(type)) {
        this.$message.error('上传头像只能是' + isPic + '格式')
      }
      if (!isLt2M) {
        this.$message.error('上传头像大小不能超过2MB！')
      }
      return isPic && isLt2M
    },
    handlePicSuccess (res, file) {
      if (res.err > 0) {
        this.$message.error(res.desc)
      } else {
        this.$message.success(res.desc)
        this.$set(this.form, 'picurl', res.result)
      }
    },
    getList () {
      this.$http.get('coupon/list').then(res => {
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
        this.$http.post('coupon/remove', { id }).then(res => {
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
        this.$http.post('coupon/remove', { id: this.ids }).then(res => {
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
          this.$http.post('coupon/save', { ...this.form }).then(res => {
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
.size150x100 .el-upload{
  width: 150px;
  height: 100px;
}
</style>
