postinstall:
	@echo "Updating geoip data"; \
	cd node_modules/geoip-lite/data; \
	curl -O "http://koti.kapsi.fi/garo/GeoIPCountryCSV.zip"; \
	unzip -u GeoIPCountryCSV.zip; \
	rm GeoIPCountryCSV.zip; \
	rm geoip-country.dat || echo "This is not a problem"; \
	node ../lib/country-converter.js ./GeoIPCountryWhois.csv geoip-country.dat; \
	rm GeoIPCountryWhois.csv


test:
	@./node_modules/.bin/expresso

.PHONY: test
