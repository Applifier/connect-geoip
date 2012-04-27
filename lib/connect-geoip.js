var path = require('path');
var geoip = require('geoip-lite');

exports.geoip = function() {
  return function(req, res, next) {
    var ip = getClientIp(req);
    req.geoip = {};
    req.geoip.country = lookup(ip) || {
      country_code: '--',
      country_code3: '---',
      country_name: 'unknown',
      continent_code: '--'
    };
    next();
  };
};

function lookup(ip) {
  var geo = geoip.lookup(ip);
  return {
        country_code: geo.country,
        country_code3: '---',
        country_name: 'unknown',
        continent_code: '--'
      };
}

function getClientIp(req) {
  var ip_address = null;
  ip_address = req.headers['x-forwarded-for'];
  if (ip_address == undefined) {
    ip_address = req.connection.remoteAddress;
  } else {
    var ipParts = ip_address.split(', ');
    ip_address = ipParts[0];
  }

  return ip_address;
}