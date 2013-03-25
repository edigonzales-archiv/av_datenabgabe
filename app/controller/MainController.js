Ext.define('Buks.controller.MainController', {
    extend: 'Ext.app.Controller',
    stores: [
        'Communes'
    ],
    views: [
        'Headerpanel', 
        'Centerpanel', 
        'Westpanel', 
        'Infowindow'
    ],
    
    init:function(){
        this.control({
            '#dataGrid': {
                cellclick: this.onCellClick
            }               
        });

        this.application.on({
            //Event handlers
        });
    },

    onCellClick: function(table, td, cellIndex, record, tr, rowIndex, e, eOpts) {

        if (cellIndex == 3) {
            var view = Ext.widget('infoWindow', {nfgeom: record});
        }
    }  
    
    
});
