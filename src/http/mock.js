var Mock = require('mockjs')
var Random = Mock.Random
var datas = Mock.mock('http://api.com/datas', {
  'goods|11': [{
    'id|+1': 1,
    'title': '@string',
    'intro': Random.cparagraph(3),
    'imgPath': Random.image('200x200', '#dec4e0', '#333', 'png', ''),
    'price|500-700': 1,
    'onsale|300-499': 1
  }],
  'accountInfo|2': [{
    'session_id|+1': 1,
    'account|+1': ['741', 'admin@admin.admin', 'qwerty'],
    'password|+1': ['369', 'admin', 'qwerty']
  }]
})

export { datas }
