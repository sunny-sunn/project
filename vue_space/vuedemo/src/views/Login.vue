<template>
  <div>
    <h2>用户登录</h2>
    <input v-model.trim="form.username" type="text" placeholder="用户名" />
    <br />
    <br />
    <input v-model.trim="form.password" type="password" placeholder="密码" />
    <br />
    <br />
    <button @click="submit">登录</button>
  </div>
</template>

<script>
import md5 from "js-md5";
export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    submit() {
      let { username, password } = this.form;

      this.$http
        .post("login", {
          username,
          password: md5(password)
        })
        .then(res => {
          console.log(res);
          if (res.result.err > 0) {
            alert(res.result.msg);
          } else {
            this.$router.push("/user");
          }
        });
    }
  }
};
</script>
