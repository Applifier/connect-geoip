# connect-geoip
Connect middleware to query client geolocation from geoip data. At the moment country data is the only data retrieved.
## Installation
    $ npm install connect-geoip
If you have problems with the geoip package, turn to https://github.com/kuno/GeoIP for instructions.
## Basic example
Example below returns geoip details (country) for every request.

    var connect = require('connect');
    var geoip = require('connect-geoip');

    connect.createServer(
      geoip.geoip(),
      function(req, res, next) {
        res.end(JSON.stringify(req.geoip));
        // {"country":{"country_code":"US","country_code3":"USA","country_name":"United States","continent_code":"NA"}}
      }
    ).listen(3000);

## Defining a specific path to geoip data
    geoip.geoip({path : "/tmp/GeoIP.dat"});

## Licenses
GeoIP module used (https://github.com/kuno/GeoIP) is licensed under GNU LGPL.

Other:<br />
(The MIT License)

Copyright(c) 2011 Applifier Ltd.<br />

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.