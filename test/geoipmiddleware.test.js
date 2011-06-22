var connect = require('connect')
  , assert = require('assert')
  , should = require('should')
  , http = require('http')
  , geoipMiddleware = require('geoipmiddleware.js');

module.exports = {
  'test ipv4': function() {
    var app = connect.createServer(
      geoipMiddleware.geoipMiddleware(),
      function(req, res, next) {
        res.end(JSON.stringify(req.geoip));
      }
    );
  
    assert.response(app,
      { url: '/', headers:{'x-forwarded-for' : "8.8.8.8, proxy1, proxy2"}},
      { body: '{"country":{"country_code":"US","country_code3":"USA","country_name":"United States","continent_code":"NA"}}' });

  },
  'test ipv4 with local ip': function() {
    var app = connect.createServer(
      geoipMiddleware.geoipMiddleware(),
      function(req, res, next) {
        res.end(JSON.stringify(req.geoip));
      }
    );

    assert.response(app,
      { url: '/', headers:{'x-forwarded-for' : "127.0.0.1, proxy1, proxy2"}},
      { body: '{"country":{"country_code":"--","country_code3":"---","country_name":"unknown","continent_code":"--"}}' });

  }
}
