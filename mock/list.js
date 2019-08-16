(req, res, mock) => {
  
  return mock.mock({
    code:200,
    fail: false,
    'data|10':[{
      id:'@id',
      username:'@cname',
      email:'@email',
      time:'@dateTime'
    }],
    total: 129
  })
}