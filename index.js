var url = require('url')
var microformats = require('microformat-node')
var request = require('request')

function getAccessToken (tokenRequest, cb) {
  var authRequest = {
    code: tokenRequest.code,
    me: cleanUrl(tokenRequest.me),
    redirect_uri: tokenRequest.redirect_uri,
    client_id: tokenRequest.client_id,
    state: tokenRequest.state
  }

  getAuthEndpoint(req.me, function (err, endpoint) {
    if (err) return cb(err)
    var req = {
      url: endpoint,
      form: authRequest
    }

    request.post(req, function (err, httpResponse, body) { /* ... */ })
  })
}

function getAuthEndpoint (me, cb) {
  microformats.parseUrl(me, {}, function (err, data) {
    if (err) return cb(err)
    var authEndpoint = cleanUrl(data.rels.authorization_endpoint)
    return cb(null, authEndpoint)
  })
}

function cleanUrl (urlStr) {
  return url.format(url.parse(urlStr))
}

module.exports = getAccessToken
