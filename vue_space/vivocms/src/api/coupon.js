import Mock from 'mockjs'
import { uuid, orderBy } from '../utils/index'

const sysCoupon = localStorage.getItem('sys_coupon')
const coupon = sysCoupon ? JSON.parse(sysCoupon) : []

// 轮播列表
Mock.mock('coupon/list', 'get', () => ({ result: orderBy(coupon) }))

// 修改轮播状态
Mock.mock('coupon/state', 'post', options => {
  const { state, id } = JSON.parse(options.body)

  for (let i = 0; i < coupon.length; i++) {
    if (coupon[i].id === id) {
      coupon[i].state = state
      break
    }
  }
  localStorage.setItem('sys_coupon', JSON.stringify(coupon))
  return {
    result: {
      err: 0,
      msg: '状态修改成功！'
    }
  }
})

// 删除 批量删除 轮播
Mock.mock('coupon/remove', 'post', options => {
  const { id } = JSON.parse(options.body)
  const ids = Array.isArray(id) ? id : [id]
  let err = 0
  for (let i = 0; i < ids.length; i++) {
    const index = coupon.findIndex(item => item.id === ids[i])
    if (index === -1) {
      err += 1
      continue
    }
    coupon.splice(index, 1)
  }
  localStorage.setItem('sys_coupon', JSON.stringify(coupon))
  return {
    result: {
      err,
      msg: err ? '删除失败' : '删除成功！'
    }
  }
})

// 新增 修改轮播
Mock.mock('coupon/save', 'post', options => {
  const body = JSON.parse(options.body)

  if (body.id === 0) {
    coupon.unshift({
      ...body,
      id: uuid(),
      addtime: new Date().getTime()
    })

    localStorage.setItem('sys_coupon', JSON.stringify(coupon))

    return {
      result: {
        err: 0,
        msg: '添加成功！'
      }
    }
  } else {
    for (let i = 0; i < coupon.length; i++) {
      if (coupon[i].id === body.id) {
        coupon[i] = body
        break
      }
    }

    localStorage.setItem('sys_coupon', JSON.stringify(coupon))

    return {
      result: {
        err: 0,
        msg: '修改成功！'
      }
    }
  }
})
