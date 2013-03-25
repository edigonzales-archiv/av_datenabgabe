Ext.define('Buks.view.Westpanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.westPanel',
    //html: 'Infos zu Format, Bezugsrahmen, Beglaubigung NF-Geometer, Gemeindefusionen, Aktualit�t'
    html: this.setHints()
});


function setHints() {
    html = '<div style="padding:10px">';
    
    html += '<b>Erstellung Situationsplan:</b><br>';
    html += '�ber den Link k�nnen Situationspl�ne (Auszug Plan f�r das Grundbuch) erstellt werden.'
    
    html += '<br><br><b>Datendownload:</b><br>';
    html += 'Es stehen die Formate <i>Interlis 1 (ITF)</i>, <i>DXF Geobau (DXF)</i> und <i>ESRI Shapefile (SHP)</i> zum Download zur Verf�gung.';
    html += '<br><br><i>ITF:</i> Daten im Bundesmodell (ITF-CH) und im kantonalen Modell (ITF-SO).';
    html += '<br><br><i>DXF Geobau:</i> Daten im Datenreferenzmodell DXF Geobau.';
    html += '<br><br><i>ESRI Shapefile:</i> Daten im vereinfachten Datenmodell <a href="http://www.cadastre.ch/internet/cadastre/de/home/products/mopublic.html" target="_blank">MOpublic</a>.';
    
    html += '<br><br><b>Beglaubigung:</b><br>';
    html += 'Ausz�ge aus dem Plan f�r das Grundbuch sind f�r Baugesuchseingaben vom zust�ndigen Nachf�hrungsgeometer zu unterzeichnen.';
    
    html += '<br><br><b>Aktualit�t:</b><br>';
    html += 'Die Daten werden w�chentlich aktualisiert.';
    
    html += '<br><br><b>Bezugsrahmen:</b><br>';
    html += 'Die Daten liegen im Bezugsrahmen LV03 vor und k�nnen auf Wunsch im Bezugsrahmen LV95 bezogen werden oder kostenlos bei der <a href="http://www.swisstopo.admin.ch/internet/swisstopo/de/home/apps/calc/reframe.html" target="_blank">swisstopo</a>  transformiert werden.';
    
    html += '</div>';
    
    return html;
    
}
