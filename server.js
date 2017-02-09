const express = require('express')
// const govTrack = require('govtrack-node');
const app = express()
import * as govTrack from './govtrack.js'
import * as proPublica from './propublica.js'

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // This doesn't do anything yet.
  res.sendFile(__dirname + '/index.html')
})

app.get('/:state/:district', (req, res) => {
  let state = req.params.state
  let district = req.params.district

  proPublica.getRepresentative(state, district)
    .then(
      function(result) {
        console.log(result)
        res.render('reppage.ejs', result)
      },
      function(err) { // <-- what's the diff between this error
        console.log(err)
      })
    .catch( // <-- and whatever this one is.
      function(reason) {
        console.log(reason)
      }
    )
  })

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
