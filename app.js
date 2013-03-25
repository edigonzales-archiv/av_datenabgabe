Ext.Loader.setConfig({enabled:true});

Ext.application({
    name: 'Buks',
    appFolder: 'app',
    // Brauchts diesen Controller überhaupt?? Mache ja noch nix...
    controllers: [
        'MainController'
    ],
    autoCreateViewport: true
});
