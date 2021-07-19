<template>
  <div class="login">
    <h2>用户登录</h2>
    <el-form ref="form" :model="form" :rules="rules" status-icon label-width="60px">
      <el-form-item label="账号" prop="username">
        <el-input v-model.trim="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" show-password v-model.trim="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
        <el-button type="warning" @click="$router.push('/register')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import md5 from 'js-md5'
export default {
  data () {
    return {
      form: {},
      rules: {
        username: { required: true, message: '请输入用户名', trigger: 'blur' },
        password: { required: true, message: '请输入密码', trigger: 'blur' }
      }
    }
  },

  // created(){
  //   console.log(md5('000000'))
  //   this.$http.get('admin/list').then(res=>{
  //     console.log(res)
  //   })
  // },

  methods: {
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$http.post('admin/login', {
            username: this.form.username,
            password: md5(this.form.password)
          }).then(res => {
            if (res.result.err > 0) {
              this.$message.error(res.result.msg)
            } else {
              this.$message.success(res.result.msg)
              this.$store.dispatch('GetAdminInfo', { username: this.form.username })
              setTimeout(() => {
                this.$router.push(localStorage.getItem('default-active') || 'app')
              }, 100)
            }
          })
        }
      })
    }
  },

  // 按回车键确定
  mounted () {
    window.onkeydown = ev => {
      ev.keyCode === 13 && this.submit()
    }
  },
  destroyed () {
    window.onkeydown = null
  }
}
</script>

<style lang="less">
.login{
  position: fixed;
  width: 320px;
  border-radius: 4px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .3);
  padding: 20px;
  left: 50%;
  top: 20%;
  margin-left: -150px;
  h2{
    padding: 20px 0;
    font-size: 24px;
    text-align: center;
  }
}
</style>
