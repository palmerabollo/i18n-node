require('./index')

var Browser = require('zombie')
var visitLinks = require('../testlib/visitlinks')
var DE = new Browser({
  headers: {
    'accept-language': 'de'
  }
})
var EN = new Browser({
  headers: {
    'accept-language': 'en'
  }
})

describe('Using res.__() in a plain node.js setup http server to handle concurrent request correctly', function () {
  describe('serial requests', function () {
    visitLinks('series', 'test', EN, 'Hello', DE, 'Hallo')
  })

  describe('parallel requests', function () {
    visitLinks('parallel', 'test', EN, 'Hello', DE, 'Hallo')
  })
})
