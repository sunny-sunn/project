import Mock from 'mockjs'
import jwt from 'jsonwebtoken'
import { uuid } from '../utils/index'

const sysAdmin = localStorage.getItem('sys_admin')
const admin = sysAdmin ? JSON.parse(sysAdmin) : [
  {
    id: 1,
    username: 'admin',
    nickname: '龚贤',
    gender: 1,
    password: '670b14728ad9902aecba32e22fa4f6bd',
    avatar: require('../assets/images/face.jpg'),
    mobile: '18579105168',
    permission: [],
    addtime: 1323232434,
    state: 1
  },
  {
    id: 6,
    username: 'aaaaaa',
    nickname: '张三',
    gender: 1,
    password: '670b14728ad9902aecba32e22fa4f6bd',
    avatar: require('../assets/images/face.jpg'),
    mobile: '18579105168',
    permission: [],
    addtime: 1323232434,
    state: 0
  }
]
// 检测_admin数组的变化,如果变化了，保存到本地
// const admin = dataProxy(_admin, 'admin')

// 管理员列表
Mock.mock('admin/list', 'get', {
  result: admin

})
// 登录验证
Mock.mock('admin/login', 'post', options => {
  const { username, password } = JSON.parse(options.body)

  const vaild = admin.some(item => item.username === username && item.password === password)
  if (vaild) {
    jwt.sign({ data: username }, '0513', { expiresIn: 60 * 60 * 60 }, (err, token) => {
      console.log(err)
      localStorage.setItem('SC-Token', token)
    })
  }

  return {
    result: {
      err: vaild ? 0 : 1001,
      msg: vaild ? '登陆成功' : '用户名或密码错误'
    }
  }
})

// 查询当前登录信息
Mock.mock('admin/info', 'post', options => {
  const { username } = JSON.parse(options.body)
  return {
    result: admin.find(item => item.username === username)
  }
})
// 管理员注册
Mock.mock('admin/create', 'post', options => {
  const body = JSON.parse(options.body)
  const existUsername = admin.some(item => item.username === body.username)
  if (existUsername) {
    return {
      result: {
        err: 1001,
        msg: '该用户已被注册'
      }
    }
  }

  const existMobile = admin.some(item => item.username === body.mobile)
  if (existMobile) {
    return {
      result: {
        err: 1002,
        msg: '该手机号码已被注册'
      }
    }
  }

  admin.unshift({
    id: uuid(),
    username: body.username,
    nickname: '未知',
    gender: 0,
    password: body.password,
    avatar: require('../assets/images/nophoto.svg'),
    mobile: body.mobile,
    permission: [],
    addtime: new Date().getTime(),
    state: 1
  })

  localStorage.setItem('sys_admin', JSON.stringify(admin))

  return {
    result: {
      err: 0,
      msg: '注册成功'
    }
  }
})
