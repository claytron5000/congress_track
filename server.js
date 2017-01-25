const express = require('express')
// const govTrack = require('govtrack-node');
const app = express()
import * as govTrack from './govtrack.js'

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/:state/:district', (req, res) => {
  let state = req.params.state
  let district = req.params.district

  govTrack.getRepresentative(state, district, function(cb) {
    // console.log(cb)
    res.render('reppage.ejs', cb.objects[0])
  })

  // govTrack.findRole({ current: true, state: state, district: district }, function(err, govres) {
  //   if (!err) {
  //
  //     res.render('reppage.ejs', govres.objects[0])
  //   } else {
  //     console.log('error')
  //   }
  // })

}) // state/district get

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})