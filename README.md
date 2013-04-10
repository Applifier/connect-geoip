# connect-geoip
Connect middleware to query client geolocation from geoip data.
## Installation
    $ npm install connect-geoip
## Basic example
Example below returns geoip details (country) for every request.

```javascript
var connect = require('connect');
var geoip = require('connect-geoip');

connect.createServer(
  geoip.geoip(),
  function(req, res, next) {
    res.end(JSON.stringify(req.geoip));
    // {"country":{"country_code":"FI","country_name":"Finland","continent":"Europe"}}
  }
).listen(3000);
```

## Example response
```javascript
{
  city: "Englewood",
  region: "CO",
  ll: [
    39.6237,
    -104.8738
  ],
  country: {
    country_code: "US",
    country_name: "United States",
    continent: "North America"
  }
}
```

## Licenses
GeoIP module used (https://github.com/bluesmoon/node-geoip) is licensed under the Apache License.
Details of this license and the MaxMind GeoIP data license can be found here:
https://github.com/bluesmoon/node-geoip/blob/master/LICENSE

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