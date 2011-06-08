var path = require('path');
var geoip = require('geoip');
var Country = geoip.Country;

var pathsToData = [
  "/usr/share/GeoIP/GeoIP.dat",
  "/usr/local/share/GeoIP/GeoIP.dat",
  "/opt/local/share/GeoIP/GeoIP.dat"
]

var geoipMiddleware = exports.geoipMiddleware = function(options) {
  var options = options || {path : tryToFindGeoIPData()};
  var country = new Country(options.path);

  return function(req, res, next) {
    var ip = getClientIp(req);
    req.geoip = {};
    country.lookup(ip, function(err, data) {
      if (err == null) {
        req.geoip.country = data;
      }
      next();
    });
  };
};

function tryToFindGeoIPData() {
  for (var i = 0; i < pathsToData.length; i++) {
    var file = pathsToData[i];
    if (path.existsSync(file)) {
      return file;
    }
  }

  return null;
};

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
};