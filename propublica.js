// ProPublica API
const request = require('request')
const fs = require('fs')
let keys = JSON.parse(fs.readFileSync('./keys.json', 'utf8'));

export function getRepresentative(state, district) {
  return new Promise(function(resolve, reject) {
    let options = {
      url: 'https://api.propublica.org/congress/v1/members/house/'
      + state + '/' + district + '/'
      + 'current.json',
      headers: {
        "X-API-Key": keys.proPublicaKey,
      },
      dataType: 'application/json',
    }

    request(options, function (error, response, body) {
      if (!error) {
        resolve(JSON.parse(body))
      } else {
        reject(Error(error))
      }

    })
  })
}

export function getRepInfo(apiUrl) {
  return new Promise(function(resolve, reject) {
    let options = {
      url: apiUrl,
      headers: {

      }
    }
  })
}
