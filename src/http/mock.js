var Mock = require('mockjs')
var Random = Mock.Random
var datas = Mock.mock('http://api.com/datas', {
  // 商品信息
  'goods|11': [{
    'id|+1': 0,
    'title|+1': ['每日邮报', '早餐饼', 'Gardena 袜子', '美味水', '笔记本电脑', '电剃须刀', 'iphone', 'ipad', 'gear 3', '哈根达斯', '三菱笔'],
    'intro|+1': [Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3), Random.cparagraph(3)],
    'imgPath': Random.image('200x200', '#dec4e0', '#333', 'png', ''),
    'imgPath2': Random.image('125x125', '#FDECB7', '#333', 'png', ''),
    'imgPath3': Random.image('411x250', '#FDECB7', '#333', 'png', ''),
    'price|500-700': 1,
    'onsale|300-499': 1,
    'count|600-3000': 1,
    'rate|0-6': 1,
    'type|11': [['Type A', 'Type B', 'Type C'], ['Type A', 'Type B', 'Type C', 'Type D'], ['Type A', 'Type B']]
  }],
  // 账户列表
  'accountInfo|2': [{
    'session_id|+1': 1,
    'account|+1': ['741', 'admin@admin.admin', 'qwerty'],
    'password|+1': ['369', 'admin', 'qwerty']
  }],
  // 商品分类
  'class|3': [{
    'title|+1': ['电子设备', '家庭', '保健与化妆品'],
    'content|+1': [[
      '电视娱乐', '计算机与平板', '耳机'
    ], [
      '扫除用品', '家具', '草坪用品'
    ], [
      '个人护理', '健康药物', '洗澡用品'
    ]],
    'classUrl|+1': [
      ['content/01', 'content/02', 'content/03'],
      ['content/04', 'content/05', 'content/06'],
      ['content/07', 'content/08', 'content/09']
    ],
    'contentUrl|+1': ['01', '02', '03']
  }],
  // 促销活动
  'events|2': [{
    'title|+1': ['返校季', '居家'],
    'content|+1': ['学生用品、运动鞋、校园风服饰，把他们放到开学计划里吧。', '桌布和挂画，把家好好装饰一番吧。'],
    'picUrl|+1': ['events', 'events2']
  }]
})

export { datas }
