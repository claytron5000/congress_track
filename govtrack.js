// Govtrack file
const govTrack = require('govtrack-node');

export function getRepresentative(state, district, fn) {
  govTrack.findRole({ current: true, state: state, district: district }, function(err, res) {
    if (!err) {
      fn(res)
    } else {
      console.log(err)
    }
  })
}
