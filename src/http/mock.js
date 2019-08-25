var Mock = require('mockjs')
var Random = Mock.Random
var datas = Mock.mock('http://api.com/datas', {
  // 商品信息
  'goods|11': [{
    'id|+1': 1,
    'title|+1': ['每日邮报', '早餐饼', 'Gardena 袜子', '美味水', '笔记本电脑', '电剃须刀', 'iphone', 'ipad', 'gear 3', '哈根达斯', '三菱笔'],
    'intro': Random.cparagraph(3),
    'imgPath': Random.image('200x200', '#dec4e0', '#333', 'png', ''),
    'price|500-700': 1,
    'onsale|300-499': 1
  }],
  // 账户列表
  'accountInfo|2': [{
    'session_id|+1': 1,
    'account|+1': ['741', 'admin@admin.admin', 'qwerty'],
    'password|+1': ['369', 'admin', 'qwerty']
  }],
  // 促销活动
  'events|1': [{
    'title': '返校季',
    'content': '学生用品、运动鞋、校园风服饰，把他们放到开学计划里吧。',
    'picUrl': 'events'
  }]
})

export { datas }
