import Mock from "mockjs";
import { makeToken } from "../utils/index";

Mock.mock("slides", "get", function() {
  return {
    result: [1, 2, 3]
  };
});

Mock.mock("login", "post", function(options) {
  let { username, password } = JSON.parse(options.body);
  if (username == "admin" && password == "e10adc3949ba59abbe56e057f20f883e") {
    localStorage.setItem("SC-Token", makeToken());
    return {
      result: {
        msg: "登录成功！"
      }
    };
  } else {
    return {
      result: {
        err: 1001,
        msg: "用户名或者密码错误!"
      }
    };
  }
});

Mock.mock("product/cate", "get", function() {
  return {
    result: [
      { id: 1, name: "IQOO" },
      { id: 2, name: "NEX" }
    ]
  };
});

Mock.mock("product/list", "get", function() {
  return {
    result: [
      { id: 1, title: "IQOO" },
      { id: 2, title: "NEX" }
    ]
  };
});
