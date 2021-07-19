import Mock from 'mockjs'
import jwt from 'jsonwebtoken'
import { uuid, update } from '../utils/index'

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
  }
]
// 检测_admin数组的变化,如果变化了，保存到本地
// const admin = dataProxy(_admin, 'admin')

// 管理员列表
// Mock.mock('admin/list', 'get', {
//   result: admin
// })
Mock.mock('admin/list', 'get', () => ({ result: admin }))

// 登录验证
Mock.mock('admin/login', 'post', options => {
  const { username, password } = JSON.parse(options.body)

  const condition = item => item.username === username && item.password === password

  const vaild = admin.some(condition)
  if (vaild) {
    const { state } = admin.find(condition)
    if (!state) {
      return {
        result: {
          err: 1002,
          msg: '您的账户已经被锁定，请联系管理员！'
        }
      }
    }

    jwt.sign({ data: username }, '0513', { expiresIn: 60 * 60 * 60 }, (err, token) => {
      if (!err) {
        localStorage.setItem('SC-Token', token)
      }
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

// 修改用户状态
Mock.mock('admin/state', 'post', options => {
  const { state, id } = JSON.parse(options.body)

  for (let i = 0; i < admin.length; i++) {
    if (admin[i].id === id) {
      admin[i].state = state
      break
    }
  }
  localStorage.setItem('sys_admin', JSON.stringify(admin))
  return {
    result: {
      err: 0,
      msg: '状态修改成功！'
    }
  }
})

// 删除 批量删除 用户
Mock.mock('admin/remove', 'post', options => {
  const { id } = JSON.parse(options.body)
  const ids = Array.isArray(id) ? id : [id]
  let err = 0
  for (let i = 0; i < ids.length; i++) {
    const index = admin.findIndex(item => item.id === ids[i])
    if (index === -1) {
      err += 1
      continue
    }
    admin.splice(index, 1)
  }
  localStorage.setItem('sys_admin', JSON.stringify(admin))
  return {
    result: {
      err,
      msg: err ? '删除失败' : '删除成功！'
    }
  }
})

// 新增 修改用户
Mock.mock('admin/save', 'post', options => {
  const body = JSON.parse(options.body)

  if (body.id === 0) {
    admin.unshift({
      ...body,
      id: uuid(),
      addtime: new Date().getTime()
    })

    localStorage.setItem('sys_admin', JSON.stringify(admin))

    return {
      result: {
        err: 0,
        msg: '添加成功！'
      }
    }
  } else {
    update(admin, body)

    localStorage.setItem('sys_admin', JSON.stringify(admin))

    return {
      result: {
        err: 0,
        msg: '修改成功！'
      }
    }
  }
})
