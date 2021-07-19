<template>

  <div class="panel">

    <div class="heading">
      <h2>用户页面</h2>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><a href="#/app">后台首页</a></el-breadcrumb-item>
        <el-breadcrumb-item><a href="#/app/admin">用户管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="search">
      <div class="options">

        <el-select v-model="check" placeholder="是否审核" size="small" clearable="">
          <el-option label="未审核"  value="0" />
          <el-option label="已审核"  value="1" />
        </el-select>

        <el-input v-model="keyword" placeholder="请输入账号/手机/昵称" size="small" clearable="" />
      </div>
      <el-button type="danger" icon="el-icon-plus" size="small">新增</el-button>
    </div>

    <div class="list">
      <el-table :data="tableData">
        <el-table-column type="selection"  />
        <el-table-column label="头像" >
          <template v-slot="scope">
            <el-avatar :size="40" :src="scope.row.avatar"></el-avatar>
          </template>
        </el-table-column>

        <el-table-column  label="账号"  prop="username" />
        <el-table-column  label="性别"  prop="gender" :formatter="formatGender"  />
        <el-table-column  prop="nickname"  label="昵称"  />
        <el-table-column  prop="mobile"  label="手机"  />
        <el-table-column  prop="addtime" label="注册日期" :formatter="formatTime"  />

        <el-table-column label="操作" align="right">
          <template>
            <el-button size="mini">修改</el-button>
            <el-button size="mini" type="danger">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>

  </div>

</template>

<script>
import { formatstamp } from '../utils/index'
export default {
  data () {
    return {
      check: '',
      keyword: '',
      tableData: []
    }
  },
  created () {
    this.$http.get('admin/list').then(res => {
      this.tableData = res.result
    })
  },
  methods: {
    formatGender (row) {
      return ['女', '男'][row.gender]
    },
    formatTime (row) {
      return formatstamp(row.addtime)
    }
  }
}
</script>

<style>

</style>
