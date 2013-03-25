Ext.define('Buks.controller.MyController', {
    extend:'Ext.app.Controller',
    
    views: [
        'Infowindow'
    ],
    
    init:function(){
        this.control({
            '#dataGrid': {
                cellclick: this.editUser
            }               
        });

        this.application.on({
            //Event handlers
        });
    },
    
    editUser: function(grid, record) {
        var view = Ext.widget('infoWindow');
 
        //view.down('form').loadRecord(record);
    },
    
    onCellClick:function(table, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        
        if (cellIndex == 3) {
        
        
            //alert("ahhl");
            //var target = e.getTarget();
            //console.log(target);
            //console.log(table);
            //console.log(td);
            //console.log(cellIndex);
            console.log(record.raw.properties);
            //console.log(tr);
            //console.log(rowIndex);
            //console.log(e);
            //console.log(eOpts);
            
            var myPanel = Ext.create('Ext.panel.Panel', {
              border: false,
              frame: false
            });
            
            var popup = Ext.create('Ext.window.Window', {
                title: 'Nachf&uuml;hrungsgeometer',
                height: 600,
                width: 800,
                layout: 'fit',
                items: {  
                    xtype: myPanel
                }
            });        
            
            //myPanel.html = "gag";
            myPanel.html = this.setHtml();
            
            
            
            popup.show();   
            
        }        
    },
    
setHtml: function() {
        
    alert("hallo");
    return "ja";
}    
    
    
    
});


