#!/bin/bash
rm /tmp/datenabgabe_info.json

ogr2ogr -f GeoJSON /tmp/datenabgabe_info.json PG:"dbname='sogis' host='srsofaioi4531' port='5432' user='mspublic' password='mspublic' schemas=av_nfgeometer tables=av_nfgeometer.datenabgabe_info_v"

cp /tmp/datenabgabe_info.json /opt/wwwroot/sogis/develop/bjsvwzie/av_datenabgabe/data/datenabgabe_info.json 

chmod +r /opt/wwwroot/sogis/develop/bjsvwzie/av_datenabgabe/data/datenabgabe_info.json



