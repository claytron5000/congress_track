var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('Home Page')
})

app.get('/:state/:district', function(req, res) {
  res.send('You are in District #' + req.params.district + ' in the state of ' + req.params.state)
})





app.listen(3000, function () {
  console.log('app listening on port 3000!')
})

var govTrack = require('govtrack-node');

function congressMember(state, district, cb) {
  this.state = state
  this.district = district
}

function foo(state, district, fn) {
  govTrack.findRole({ current: true, state: state, district: district }, function(err, res) {
    if (!err) {
      fn(res.objects[0].person)
    } else {
      console.log('error')
    }
  })
}
congressMember.prototype.getDetails =
  function() {
    _this = this
    foo(this.state, this.district, function(cb) {
      _this.details = cb
      console.log(_this)
    })
  }

var myHouseRep = new congressMember('MA', 1)
myHouseRep.getDetails()



/*
govTrack.findRole({ current: true, state: state, district: district }, function(err, res) {
  if (!err) {
    fn(res.objects[0].person)
  } else {
    fn(err)
  }
})
*/
// console.log(myHouseRep)
// (state, district) {
//   var houseRep = govTrack.findRole({ current: true, state: 'MA', district: 1 }, function(err, res) {
//     if (!err) {
//       return res.objects[0].person
//     } else {
//       console.log(err);
//     }
//   });
//
//   console.log(houseRep);
//
// }

// govTrack.findPerson({id: 43884}, function(err, res) {
//   if(!err) {
//     // console.log(res)
//   } else {
//     // console.log(err)
//   }
// });
//
// govTrack.findVote({chamber: 'house', congress: 115} , function(err, res) {
//   if(!err) {
//     return res
//   } else {
//     console.log(err);
//   }
// });
//
// govTrack.findVoteVoter({person: {id: 43884}}, function(err, res) {
//   if(!err) {
//     // console.log(res)
//   } else {
//     console.log(err)
//   }
//
// })
