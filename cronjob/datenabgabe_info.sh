#!/bin/bash
rm /tmp/datenabgabe_info.json

ogr2ogr  -f GeoJSON /tmp/datenabgabe_info.json PG:"dbname='rosebud' host='localhost' port='5432' user='stefan' password='ziegler12' schemas=av_nfgeometer tables=av_nfgeometer.datenabgabe_info_v"

cp /tmp/datenabgabe_info.json /home/sogeo/sogeo.ch/docroot/extjs/mvc3/datenabgabe_info.json

chmod +r /home/sogeo/sogeo.ch/docroot/extjs/mvc3/datenabgabe_info.json


