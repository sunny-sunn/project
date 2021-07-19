import Mock from 'mockjs'
import { uuid, orderBy } from '../utils/index'

const sysRole = localStorage.getItem('sys_role')
const role = sysRole ? JSON.parse(sysRole) : []

// 轮播列表
Mock.mock('role/list', 'get', () => ({ result: orderBy(role) }))

// 修改轮播状态
Mock.mock('role/state', 'post', options => {
  const { state, id } = JSON.parse(options.body)

  for (let i = 0; i < role.length; i++) {
    if (role[i].id === id) {
      role[i].state = state
      break
    }
  }
  localStorage.setItem('sys_role', JSON.stringify(role))
  return {
    result: {
      err: 0,
      msg: '状态修改成功！'
    }
  }
})

// 删除 批量删除
Mock.mock('role/remove', 'post', options => {
  const { id } = JSON.parse(options.body)
  const ids = Array.isArray(id) ? id : [id]
  let err = 0
  for (let i = 0; i < ids.length; i++) {
    const index = role.findIndex(item => item.id === ids[i])
    if (index === -1) {
      err += 1
      continue
    }
    role.splice(index, 1)
  }
  localStorage.setItem('sys_role', JSON.stringify(role))
  return {
    result: {
      err,
      msg: err ? '删除失败' : '删除成功！'
    }
  }
})

// 新增 修改
Mock.mock('role/save', 'post', options => {
  const body = JSON.parse(options.body)

  if (body.id === 0) {
    role.unshift({
      ...body,
      id: uuid(),
      addtime: new Date().getTime()
    })

    localStorage.setItem('sys_role', JSON.stringify(role))

    return {
      result: {
        err: 0,
        msg: '添加成功！'
      }
    }
  } else {
    for (let i = 0; i < role.length; i++) {
      if (role[i].id === body.id) {
        role[i] = body
        break
      }
    }

    localStorage.setItem('sys_role', JSON.stringify(role))

    return {
      result: {
        err: 0,
        msg: '修改成功！'
      }
    }
  }
})

// 根据角色id查询权限内容
Mock.mock('role/info', 'post', options => {
  const { rid } = JSON.parse(options.body)
  return {
    result: role.find(item => item.id === rid)
  }
})
