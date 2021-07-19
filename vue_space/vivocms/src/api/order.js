import Mock from 'mockjs'
import { uuid, orderBy } from '../utils/index'

const sysOrder = localStorage.getItem('sys_order')
const order = sysOrder ? JSON.parse(sysOrder) : []

// 轮播列表
Mock.mock('order/list', 'get', () => ({ result: orderBy(order) }))

// 修改轮播状态
Mock.mock('order/state', 'post', options => {
  const { state, id } = JSON.parse(options.body)

  for (let i = 0; i < order.length; i++) {
    if (order[i].id === id) {
      order[i].state = state
      break
    }
  }
  localStorage.setItem('sys_order', JSON.stringify(order))
  return {
    result: {
      err: 0,
      msg: '状态修改成功！'
    }
  }
})

// 删除 批量删除 轮播
Mock.mock('order/remove', 'post', options => {
  const { id } = JSON.parse(options.body)
  const ids = Array.isArray(id) ? id : [id]
  let err = 0
  for (let i = 0; i < ids.length; i++) {
    const index = order.findIndex(item => item.id === ids[i])
    if (index === -1) {
      err += 1
      continue
    }
    order.splice(index, 1)
  }
  localStorage.setItem('sys_order', JSON.stringify(order))
  return {
    result: {
      err,
      msg: err ? '删除失败' : '删除成功！'
    }
  }
})

// 新增 修改轮播
Mock.mock('order/save', 'post', options => {
  const body = JSON.parse(options.body)

  if (body.id === 0) {
    order.unshift({
      ...body,
      id: uuid(),
      addtime: new Date().getTime()
    })

    localStorage.setItem('sys_order', JSON.stringify(order))

    return {
      result: {
        err: 0,
        msg: '添加成功！'
      }
    }
  } else {
    for (let i = 0; i < order.length; i++) {
      if (order[i].id === body.id) {
        order[i] = body
        break
      }
    }

    localStorage.setItem('sys_order', JSON.stringify(order))

    return {
      result: {
        err: 0,
        msg: '修改成功！'
      }
    }
  }
})
