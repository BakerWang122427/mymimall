import Mock from "mockjs";
// 可以动态随机产生数据，具体参考mockjs官网
Mock.mock("/user/login", {
  status: 0,
  data: {
    id: 1001,
    username: "admin",
    email: "admin@52purse.com",
    phone: "15188987658",
    role: 0,
    createTime: 1479877666788,
    updateTime: 167847488948
  },
  errmsg: "登录失败"
});
