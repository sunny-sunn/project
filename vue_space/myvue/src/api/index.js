import Mock from "mockjs";

const { Random } = Mock;

Mock.mock("slides", "get", function() {
  return Mock.mock({
    "result|3": [
      {
        "id|+1": 1,
        "picurl|+1": Random.image("750x510"),
        "path|+1": ["/home", "/classify", "/user"]
      }
    ]
  });
});

Mock.mock("makegroup", "get", function() {
  return Mock.mock({
    "result|5": [
      {
        "id|+1": 1,
        picurl: Random.image("280*280"),
        title: Random.ctitle(3, 8),
        desc: Random.ctitle(5, 15),
        "picurl1|5-1000.1": 5,
        "picurl2|5-1000.1": 5
      }
    ]
  });
});

// Mock.mock("http://api.scnew.com.cn/api/user", "get", {
//   age: 29,
//   name: "李四"
// });
