update-data:
	@echo "Updating geoip data"; \
	cd node_modules/geoip-lite/data; \
	curl -O "http://cdn.applifier.com/pub/geoip/GeoIPCountryCSV.zip"; \
	unzip -u GeoIPCountryCSV.zip; \
	rm GeoIPCountryCSV.zip; \
	rm geoip-country.dat || echo "This is not a problem"; \
	node ../lib/country-converter.js ./GeoIPCountryWhois.csv geoip-country.dat; \
	rm GeoIPCountryWhois.csv


test:
	@./node_modules/.bin/expresso

.PHONY: test
