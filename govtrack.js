// Govtrack file
const govTrack = require('govtrack-node');

// get the representative for the district
export function getRepresentative(state, district) {
  return new Promise(function(resolve, reject) {
    govTrack.findRole({ current: true, state: state, district: district }, function(err, res) {
      if (!err) {
        resolve(res)
      } else {
        reject(Error(err))
      }
    })
  })
}

// get the last 100 votes
