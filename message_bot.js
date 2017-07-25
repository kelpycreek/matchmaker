var OKCupid = require('okcupidjs')

var okc = new OKCupid()


//config stuff
var username = 'kierkegaardcult'
var password = 'graveler'
var min_age = 20
var max_age = 35
var min_percent = 70
var gender = 2 //1=boy 2=girl
var message = function() {
    message_body = "HI! Whats your favorite story about?"
    console.log(message_body)
    return message_body
}
var num_swipes = 10
var delay = 50000 //1000 = 1 second

function matchable (profile) {
    if (profile.percentage >= min_percent &&
        profile.tracking_age <= max_age &&
        profile.tracking_age >= min_age &&
        profile.tracking_gender == gender) {
            return true
        } else {
            return false
        }
}

function safety () { //keeps us from getting banned
    //terrible sleep implementation :(
    //IM SO SORRY
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > delay){
          break;
        }
  }
}

okc.login(username,password, function (err, res, body) {
    console.log(body)
    for (i = 0; i < num_swipes; i++) {
        okc.getQuickmatch(function (err,res,body) {
        console.log(body)
            safety()
            if (matchable(body)) {
                okc.visitUser(body.sn)
                safety()
                okc.sendMessage(body.tuid, message())
                safety()
            }
        })
    }
})
