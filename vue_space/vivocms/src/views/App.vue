<template>
  <el-container class="app">
    <el-aside width="auto">
      <h1 class="logo">Vivo<span v-show="!isCollapse">后台管理</span></h1>

      <el-scrollbar class="myscrollbar" style="height:calc(100vh - 54px )">
        <el-menu
        :default-active="defaultActive"
        background-color="transparent"
        text-color="#fff"
        class="navmenu"
        :collapse="isCollapse"
        unique-opened
        router
        @select="handleSelect"
        >

        <Treemenu :data = "$store.state.roleInfo.content"></Treemenu>

        </el-menu>
      </el-scrollbar>

    </el-aside>

    <el-container>
      <el-header>
        <el-button icon="el-icon-s-fold" class="toggle-btn" @click="isCollapse=!isCollapse" />
        <el-input
        placeholder="请搜索"
        prefix-icon="el-icon-search"
        v-model="keyword"
        class="search-input"
         />
         <div class="right-nav">
          <router-link to="">
            <i class="el-icon-house" />
          </router-link>
          <el-badge :value="12">
            <i class="el-icon-bell" />
          </el-badge>

          <el-dropdown trigger="click" @command="handleCommand">
            <div class="avatar">
              <el-avatar :size="30" :src="$store.state.adminInfo.avatar"></el-avatar>
              <span class="nickname">{{$store.state.adminInfo.nickname}}</span>
            </div>
            <el-dropdown-menu slot="dropdown" class="avatar-options">
              <el-dropdown-item command="/setting" icon="el-icon-setting">个人设置</el-dropdown-item>
              <el-dropdown-item command="/editpass" icon="el-icon-lock">修改密码</el-dropdown-item>
              <el-dropdown-item command="/update" icon="el-icon-refresh">在线升级</el-dropdown-item>
              <el-dropdown-item divided command="/logout" icon="el-icon-switch-button">退出登录</el-dropdown-item>
            </el-dropdown-menu>

          </el-dropdown>

        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Treemenu from '../components/Treemenu'
export default {
  components: { Treemenu },
  data () {
    return {
      keyword: '',
      isCollapse: false
    }
  },
  created () {
    this.$store.dispatch('GetRoleInfo')
  },
  computed: {
    defaultActive () {
      return localStorage.getItem('default-active') || ''
    }
  },
  methods: {
    handleCommand (command) {
      if (command === '/logout') {
        this.$confirm('您确定要退出当前登录吗？', '提示').then(() => {
          localStorage.removeItem('SC-Token')
          this.$message.success('退出登录成功!')
          this.$router.replace('/login')
        }).catch(() => {})
      }
    },
    handleSelect (index) {
      console.log(index)
      localStorage.setItem('default-active', index)
    }

  }
}
</script>

<style lang="less">
.myscrollbar .el-scrollbar__wrap{
  overflow-x: hidden;
}
.el-scrollbar__thumb{
  background-color: rgba(0, 0, 0, 0.15) !important;
}
.el-menu--popup{
  background-color: white !important;
  .el-submenu__title,
  .el-menu-item {
    color: #606266 !important;
  }
}
.app{
  height: 100vh;
  .el-aside {
    background-color: #4096FF;
    z-index: 10;
    box-shadow: 2px 0 6px rgba(0, 0, 0, .2);
    .logo{
      padding: 15px;
      color: white;
      font-size: 18px;
    }
    .navmenu{
      border-right: none;
      &:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
      }

      [class*="el-icon-"]{
        color: rgba(255, 255, 255, .75);
      }
      .el-submenu__title:hover,
      .el-menu-item:hover{
        background-color: #F56C6C !important;
      }
      .el-menu-item.is-active{
        background-color:  rgba(255, 255, 255, .7) !important;
      }
    }

  }
  .el-header{
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
    z-index: 9;
    .toggle-btn{
      padding: 8px 10px;
      font-size: 18px;
    }
    .search-input{
      margin-left: 10px;
      width: 200px;
      .el-input__inner{
        height: 37px;
        line-height: 37px;
      }
    }

    .right-nav{
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;

      [class*='el-icon-']{
        font-size: 18px;
        margin-left: 20px;
      }
      .avatar{
        display: flex;
        align-items: center;
        margin-left: 30px;
        cursor: pointer;
        .nickname{
          margin-left: 10px;
          white-space: nowrap;
        }
      }
    }
  }
  .el-main{
    background-color: #f0f0f0;
  }
}
.avatar-options{
  min-width: 140px;
}
</style>
