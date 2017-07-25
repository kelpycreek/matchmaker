var OKCupid = require('okcupidjs')

var okc = new OKCupid()

//config stuff
var username = 'kierkegaardcult'
var password = 'graveler'
var min_age = 20
var max_age = 35
var min_percent = 70


okc.login(username,password, function (err, res, body) {
    console.log(body)
    okc.getQuickmatch(function (err,res,body) {
        console.log(body)
    })
})
