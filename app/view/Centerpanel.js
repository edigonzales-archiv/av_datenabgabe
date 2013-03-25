Ext.define('Buks.view.Centerpanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.centerPanel',
    //title: 'All Users',
    //bodyStyle: 'background: #ffc; valign: middle;',
    forceFit: true, // ????
    cls: 'alt-x-grid-row',   
    initComponent: function () {
        this.store = 'Communes',
        this.columns = [
            { text: 'Gemeinde', dataIndex: 'gem_name', flex: 1, width: 180},
            { text: 'BFS-Nr.', dataIndex: 'gem_bfs', width: 60},
            { text: 'Lieferdatum', dataIndex: 'lieferdatum', width: 80, renderer: dateRenderer},
            { text: 'Nachf&uuml;hrungsgeometer', dataIndex: 'nfgeometer', width: 160, renderer: infoGeometerRenderer},
            { text: 'Link f&uuml;r <br>Erstellung <br>Situationsplan', dataIndex: 'pdf', align: 'center', width: 80, renderer: pdfIconRenderer},
            { text: 'Link f&uuml;r Datendownload in den Formaten', sortable: false, 
                columns: [
                    { text: 'ITF-CH', dataIndex: 'itfch', align: 'center', width: 60, renderer: zipIconRenderer},                
                    { text: 'ITF-SO', dataIndex: 'itfso', align: 'center', width: 60, renderer: zipIconRenderer},
                    { text: 'DXF', dataIndex: 'dxf', align: 'center', width: 60, renderer: zipIconRenderer},
                    { text: 'SHP', dataIndex: 'shp', align: 'center', width: 60, renderer: zipIconRenderer}            
                ]
            }
        ];
        this.callParent(arguments);
    }  
});

function emailRenderer(val) {
    if (val != null) {
        return '<a href=\'mailto:' + val + ';\'>' + val + '</a>';
    }
    return val;
};


function infoGeometerRenderer(value, p, record) {
    if (value != null) {
        return '<a class="test" href="#">' + value + '</a>';
    }
    return value;
};

function pdfIconRenderer(value, p, record) {
    if (value != null) {
        return '<a href=\'http://' + value + '\' target=\'_blank\'><img src="img/pdficon_small.png" border="0"></a>';
    }
    return value;
};

function zipIconRenderer(value, p, record) {
    if (value != null) {
        return '<a href=\'http://' + value + '\'><img src="img/zip_icon.png" border="0"></a>';
    }
    return value;
};

function dateRenderer(value, p, record) {
    return Ext.Date.format(value, 'd.m.Y');
};


