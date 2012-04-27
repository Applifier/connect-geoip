var connect = require('connect')
  , assert = require('assert')
  , should = require('should')
  , http = require('http')
  , geoip = require('../lib/connect-geoip');

module.exports = {
  'test ipv4': function() {
    var middleware = geoip.geoip();

    var req = {connection: {remoteAddress: "213.243.175.65"}, headers:{}};

    middleware(req, null, function () {
      assert.equal(JSON.stringify(req.geoip), JSON.stringify({"country":{"country_code":"FI","country_name":"Finland","continent":"Europe"}}));
    });
  }
};
