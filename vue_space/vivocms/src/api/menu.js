import Mock from 'mockjs'
import { uuid, orderBy, cascadeMenu } from '../utils/index'

const sysMenu = localStorage.getItem('sys_menu')
const menu = sysMenu ? JSON.parse(sysMenu) : []

// 菜单列表
Mock.mock('menu/list', 'get', () => ({ result: cascadeMenu(orderBy(menu)) }))

// 修改菜单状态
Mock.mock('menu/state', 'post', options => {
  const { state, id } = JSON.parse(options.body)

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].id === id) {
      menu[i].state = state
      break
    }
  }
  localStorage.setItem('sys_menu', JSON.stringify(menu))
  return {
    result: {
      err: 0,
      msg: '状态修改成功！'
    }
  }
})

// 删除 批量删除 菜单
Mock.mock('menu/remove', 'post', options => {
  const { id } = JSON.parse(options.body)
  const ids = Array.isArray(id) ? id : [id]
  let err = 0
  for (let i = 0; i < ids.length; i++) {
    const index = menu.findIndex(item => item.id === ids[i])
    if (index === -1) {
      err += 1
      continue
    }
    menu.splice(index, 1)
  }
  localStorage.setItem('sys_menu', JSON.stringify(menu))
  return {
    result: {
      err,
      msg: err ? '删除失败' : '删除成功！'
    }
  }
})

// 新增 修改菜单
Mock.mock('menu/save', 'post', options => {
  const body = JSON.parse(options.body)

  if (body.id === 0) {
    menu.unshift({
      ...body,
      id: uuid(),
      addtime: new Date().getTime()
    })

    localStorage.setItem('sys_menu', JSON.stringify(menu))

    return {
      result: {
        err: 0,
        msg: '添加成功！'
      }
    }
  } else {
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].id === body.id) {
        menu[i] = body
        break
      }
    }

    localStorage.setItem('sys_menu', JSON.stringify(menu))

    return {
      result: {
        err: 0,
        msg: '修改成功！'
      }
    }
  }
})
