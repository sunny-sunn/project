import Mock from 'mockjs'
import { uuid, orderBy } from '../utils/index'

const sysProductcate = localStorage.getItem('sys_productcate')
const productcate = sysProductcate ? JSON.parse(sysProductcate) : []

// 轮播列表
Mock.mock('productcate/list', 'get', () => ({ result: orderBy(productcate) }))

// 修改轮播状态
Mock.mock('productcate/state', 'post', options => {
  const { state, id } = JSON.parse(options.body)

  for (let i = 0; i < productcate.length; i++) {
    if (productcate[i].id === id) {
      productcate[i].state = state
      break
    }
  }
  localStorage.setItem('sys_productcate', JSON.stringify(productcate))
  return {
    result: {
      err: 0,
      msg: '状态修改成功！'
    }
  }
})

// 删除 批量删除 轮播
Mock.mock('productcate/remove', 'post', options => {
  const { id } = JSON.parse(options.body)
  const ids = Array.isArray(id) ? id : [id]
  let err = 0
  for (let i = 0; i < ids.length; i++) {
    const index = productcate.findIndex(item => item.id === ids[i])
    if (index === -1) {
      err += 1
      continue
    }
    productcate.splice(index, 1)
  }
  localStorage.setItem('sys_productcate', JSON.stringify(productcate))
  return {
    result: {
      err,
      msg: err ? '删除失败' : '删除成功！'
    }
  }
})

// 新增 修改轮播
Mock.mock('productcate/save', 'post', options => {
  const body = JSON.parse(options.body)

  if (body.id === 0) {
    productcate.unshift({
      ...body,
      id: uuid(),
      addtime: new Date().getTime()
    })

    localStorage.setItem('sys_productcate', JSON.stringify(productcate))

    return {
      result: {
        err: 0,
        msg: '添加成功！'
      }
    }
  } else {
    for (let i = 0; i < productcate.length; i++) {
      if (productcate[i].id === body.id) {
        productcate[i] = body
        break
      }
    }

    localStorage.setItem('sys_productcate', JSON.stringify(productcate))

    return {
      result: {
        err: 0,
        msg: '修改成功！'
      }
    }
  }
})
