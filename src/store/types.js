// 改变登录 token (权限)
export const CHANGE_TOKEN = 'CHANGE_TOKEN'

// 设置登录 user
export const SET_USER = 'SET_USER'

// 设置商品信息 goods
export const SET_GOODS = 'SET_GOODS'

// 设置促销事件 events
export const SET_EVENTS = 'SET_EVENTS'

// 设置 home 数据 flag
export const SET_FLAG = 'SET_FLAG'

// 设置 departments 数据 flag_dep
export const SET_FLAG_DEP = 'SET_FLAG_DEP'

// 设置 departments 数据 class
export const SET_CLASS = 'SET_CLASS'

// 设置 departments 数据 class
export const SET_SELECTED = 'SET_SELECTED'

// 初始化购物车项，演示用，上线可删
export const SET_CARTGOODS = 'SET_CARTGOODS'

// 推入新的购物车项
export const PUSH_CARTGOODS = 'PUSH_CARTGOODS'

// 移除新的购物车项
export const DELETE_CARTGOODS = 'DELETE_CARTGOODS'

// 移除指定购物车项
export const REMOVE_CARTGOODS = 'REMOVE_CARTGOODS'

// selected 商品
export const SET_SELECTEDGOODS = 'SET_SELECTEDGOODS'

// reset selected
export const RESET_SELECTEDGOODS = 'RESET_SELECTEDGOODS'

// 计算被选中项的总额
export const SET_SUM = 'SET_SUM'

// 支付（事实上是把选中的项目移除）
export const CHECKOUT = 'CHECKOUT'

// 全局loading状态，调用 axios 时会检测，比如会检测有没有上一次遗留的购物车讯息
// export const SET_LOADING = 'SET_LOADING'
