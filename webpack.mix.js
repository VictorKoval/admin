const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.sass('resources/assets/css/admin.scss', '../resources/assets/css/');
mix.styles([
    // Bootstrap
    "vendor/almasaeed2010/adminlte/bower_components/bootstrap/dist/css/bootstrap.min.css",
    // Font Awesome
    "vendor/almasaeed2010/adminlte/bower_components/font-awesome/css/font-awesome.min.css",
    // Ionicons
    "vendor/almasaeed2010/adminlte/bower_components/Ionicons/css/ionicons.min.css",
    // Theme style
    "vendor/almasaeed2010/adminlte/dist/css/AdminLTE.min.css",
    // AdminLTE Skins. Choose a skin from the css/skins
    // folder instead of downloading all of them to reduce the load.
    "vendor/almasaeed2010/adminlte/dist/css/skins/_all-skins.min.css",
    // Morris chart
    "vendor/almasaeed2010/adminlte/bower_components/morris.js/morris.css",
    // jvectormap
    "vendor/almasaeed2010/adminlte/bower_components/jvectormap/jquery-jvectormap.css",
    // Date Picker
    "vendor/almasaeed2010/adminlte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
    // Daterange picker
    "vendor/almasaeed2010/adminlte/bower_components/bootstrap-daterangepicker/daterangepicker.css",
    // bootstrap wysihtml5
    "vendor/almasaeed2010/adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css",

    // admin styles
    "/resources/assets/css/admin.css"

], 'public/css/admin.css').version();

mix.babel([

    // jQuery 3 
    "vendor/almasaeed2010/adminlte/bower_components/jquery/dist/jquery.min.js",
    // jQuery UI 1.11.4 
    "vendor/almasaeed2010/adminlte/bower_components/jquery-ui/jquery-ui.min.js",
    // Bootstrap 3.3.7
    "vendor/almasaeed2010/adminlte/bower_components/bootstrap/dist/js/bootstrap.min.js",
    // Morris.js charts 
    "vendor/almasaeed2010/adminlte/bower_components/raphael/raphael.min.js",
    "vendor/almasaeed2010/adminlte/bower_components/morris.js/morris.min.js",
    // Sparkline 
    "vendor/almasaeed2010/adminlte/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js",
    // jvectormap 
    "vendor/almasaeed2010/adminlte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js",
    "vendor/almasaeed2010/adminlte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js",
    // jQuery Knob Chart 
    "vendor/almasaeed2010/adminlte/bower_components/jquery-knob/dist/jquery.knob.min.js",
    // daterangepicker 
    "vendor/almasaeed2010/adminlte/bower_components/moment/min/moment.min.js",
    "vendor/almasaeed2010/adminlte/bower_components/bootstrap-daterangepicker/daterangepicker.js",
    // datepicker 
    "vendor/almasaeed2010/adminlte/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
    // Bootstrap WYSIHTML5 
    "vendor/almasaeed2010/adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js",
    // Slimscroll 
    "vendor/almasaeed2010/adminlte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js",
    // FastClick 
    "vendor/almasaeed2010/adminlte/bower_components/fastclick/lib/fastclick.js",
    // AdminLTE App 
    "vendor/almasaeed2010/adminlte/dist/js/adminlte.min.js",
    // AdminLTE dashboard demo (This is only for demo purposes) 
    "vendor/almasaeed2010/adminlte/dist/js/pages/dashboard.js",
    // AdminLTE for demo purposes
    "vendor/almasaeed2010/adminlte/dist/js/demo.js"
], "public/js/admin.js").version();

mix.copyDirectory('vendor/almasaeed2010/adminlte/bower_components/bootstrap/fonts', 'public/fonts');
mix.copyDirectory('vendor/almasaeed2010/adminlte/dist', 'public/dist');
mix.copyDirectory('vendor/almasaeed2010/adminlte/bower_components/font-awesome/fonts', 'public/fonts');
mix.copyDirectory('vendor/almasaeed2010/adminlte/bower_components/Ionicons/fonts', 'public/fonts');


mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
