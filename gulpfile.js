var elixir = require('laravel-elixir');

var assets = './node_modules/';

elixir(function(mix) {
    mix.styles([
        'bootstrap/dist/css/bootstrap.css',
        '../resources/assets/css/main.css'
    ], 'public/css/style.css', assets);
    mix.scripts([
        'jquery/dist/jquery.js',
        'bootstrap/dist/js/bootstrap.js',
        'commonmark/dist/commonmark.min.js',
        '../resources/assets/js/main.js'
    ], 'public/js/app.js', assets);
    mix.copy(assets + 'bootstrap/fonts', 'public/fonts');
});
