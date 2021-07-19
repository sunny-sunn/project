import Mock from 'mockjs'
import { uuid, orderBy } from '../utils/index'

const sysCarousel = localStorage.getItem('sys_carousel')
const carousel = sysCarousel ? JSON.parse(sysCarousel) : []

// 轮播列表
Mock.mock('carousel/list', 'get', () => ({ result: orderBy(carousel) }))

// 修改轮播状态
Mock.mock('carousel/state', 'post', options => {
  const { state, id } = JSON.parse(options.body)

  for (let i = 0; i < carousel.length; i++) {
    if (carousel[i].id === id) {
      carousel[i].state = state
      break
    }
  }
  localStorage.setItem('sys_carousel', JSON.stringify(carousel))
  return {
    result: {
      err: 0,
      msg: '状态修改成功！'
    }
  }
})

// 删除 批量删除 轮播
Mock.mock('carousel/remove', 'post', options => {
  const { id } = JSON.parse(options.body)
  const ids = Array.isArray(id) ? id : [id]
  let err = 0
  for (let i = 0; i < ids.length; i++) {
    const index = carousel.findIndex(item => item.id === ids[i])
    if (index === -1) {
      err += 1
      continue
    }
    carousel.splice(index, 1)
  }
  localStorage.setItem('sys_carousel', JSON.stringify(carousel))
  return {
    result: {
      err,
      msg: err ? '删除失败' : '删除成功！'
    }
  }
})

// 新增 修改轮播
Mock.mock('carousel/save', 'post', options => {
  const body = JSON.parse(options.body)

  if (body.id === 0) {
    carousel.unshift({
      ...body,
      id: uuid(),
      addtime: new Date().getTime()
    })

    localStorage.setItem('sys_carousel', JSON.stringify(carousel))

    return {
      result: {
        err: 0,
        msg: '添加成功！'
      }
    }
  } else {
    for (let i = 0; i < carousel.length; i++) {
      if (carousel[i].id === body.id) {
        carousel[i] = body
        break
      }
    }

    localStorage.setItem('sys_carousel', JSON.stringify(carousel))

    return {
      result: {
        err: 0,
        msg: '修改成功！'
      }
    }
  }
})
