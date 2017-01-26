// Massachusetts state legislator scaper
const cheerio = require('cheerio')
const request = require('request')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/massachusetts-general-court', (req,res) => {

  res.sendFile(__dirname + '/find-rep-form.html')
})

app.post('/search', (req, res) => {
  const SEARCH_URI = 'https://malegislature.gov/Search/FindMyLegislator'

  let qs =
    '?Address=' + req.body.street +
    '&City=' + req.body.city +
    '&ZipCode=' + req.body.zip
  let json = []
  request({
      uri: SEARCH_URI + qs,
      method: 'GET'
    }, function(err, resp, body) {

      if(!err) {

        $ = cheerio.load(body)
        let name, role, headshot, id

        $('.legislatorProfile').each(function(i, el) {
          let rep = { name: '', role: '', headshot: '', id: ''}
          name = $(el).find('.name').text()
          role = $(el).find('.role').text()
          headshot = $(el).find('.headshotWrapper img').attr('src')
          id = $(el).find('.name').parent().attr('href').replace('/Legislators/Profile/', '')
          json.push({
            name: name,
            role: role,
            headshot: headshot,
            id: id
          })

        })
        res.send(json)
      }
    }) // request

  })

app.listen(3000, function () {
  console.log('app listening on port 3000!')
})
