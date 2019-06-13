# Laravel Mix outside of Laravel
This repo was created as an example / boilerplate for how to include laravel mix on projects which are not using Laravel. I made this because I feel like Laravel mix is a very simple yet effective way of building your scripts and styles.
## Getting setup
To get started first we need to checkout this project and run

    git clone https://github.com/Absanater/laravelmix-external <YOUR-PROJECT-NAME>
    npm install



## Running
  To run we have 3 different scripts I have added.

To build assets for dev:

    npm run dev

To build assets for production:

    npm run prod

To run page with browsersync and watch for changes to files:

    npm run watch
---------------
This is intended as a boilerplate and obviously there is a lot more you could add (e.g React, Vue, PostCSS etc) but hopefully this will be helpful to anybody who is wanting to use laravel mix outside of laravel.

Documentation at: [https://laravel-mix.com/docs/4.0/](https://laravel-mix.com/docs/4.0/)
