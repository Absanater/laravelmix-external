let mix = require('laravel-mix');

// Here you setup your config as you would with laravel. If the html file isnt used change or remove browsersync
mix.js('src/scripts/app.js', 'public/js')
  .sass('src/styles/app.scss', 'public/css')
  .browserSync({
    proxy: false,
    server: ['public'],
    files: ['public/**/*.html', 'public/**/*.css', 'public/**/*.js']
  });
