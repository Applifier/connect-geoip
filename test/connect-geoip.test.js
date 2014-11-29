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
      assert.equal(JSON.stringify(req.geoip), JSON.stringify({"city":"Helsinki","region":"13","ll":[60.1756,24.9342],"country":{"country_code":"FI","country_name":"Finland","continent":"Europe"}}));
    });
  }
};
