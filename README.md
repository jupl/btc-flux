# BTC Flux 0.1.0
[![Dependency Status](https://gemnasium.com/jupl/btc-flux.png)](https://gemnasium.com/jupl/btc-react)

This is a project template for web applications using the [Flux](https://facebook.github.io/react/docs/flux-overview.html) architecture with [RxJS](http://reactive-extensions.github.io/RxJS/) and [React](http://facebook.github.io/react/).


## File Structure
    ├── app                     # Assets/code/styles for the client application
    │   ├── assets              # Static files copied without modification
    │   ├── components          # React components
    │   ├── lib                 # Libraries used by the application
    │   │   ├── dispatcher.js   # Central dispatcher for dispatching events
    │   │   ├── router.js       # Declare routes, navigate, and call on helpers
    │   │   └── store.js        # Base store class
    │   ├── stores              # Data sources used with the dispatcher
    │   ├── styles              # Stylus stylesheets
    │   ├── views               # React components to render views by route
    │   ├── app.jsx             # Configure main application module
    │   ├── app.styl            # Application/page styling definition
    │   ├── base.styl           # Stylus variables and mixins for the application
    │   ├── initialize.js       # Declare and setup Angular modules
    │   └── routes.js           # Declare and setup Angular modules
    ├── generators              # Generators used by Scaffolt
    ├── jakelib                 # Unified set of tasks for development
    ├── public                  # Compiled client-side assets
    ├── server                  # Server configuration
    │   ├── browser-sync.js     # BrowserSync proxy setup
    │   └── index.js            # Starting point of server setup
    ├── test                    # Test-related files
    │   ├── code                # Code tests that run with Karma
    │   ├── site                # Site tests that run with WebDriverJS
    │   ├── mocha.opts          # Default options for site testing
    │   └── setup.js            # Initialization for site testing
    ├── vendor                  # Additional 3rd party JS/CSS libraries
    ├── .editorconfig           # EditorConfig definitions for coding styles
    ├── bower.json              # Listing for Bower dependencies to download
    ├── brunch-config.js        # Brunch app build configuration
    ├── karma.conf.js           # Karma runner setup
    └── package.json            # Node project dependencies and configuration


## Setup
1. Download and install the following if you have not already:
  - [Node.js](http://nodejs.org/download/)
  - [Git](http://git-scm.com/downloads)
  - [Jake](https://github.com/mde/jake#installing-with-npm) (if developing)
  - [Platform SDKs](https://github.com/apache/cordova-cli#requirements) (if using Cordova)
  - [MongoDB](http://www.mongodb.org/) or service (if using Serverpack)
2. Download one of the starter projects from GitHub.
3. Navigate to the project directory and run the command `npm install`.


## Notes

### `npm start` / `npm test`
One-line commands are provided for convenience as well for those that want to start running things as quickly as possible by installing depedencies automatically. Use `npm start` to download non-development packages and run the `build:prod` task. Use `npm test` to download all packages and run both the `test:install` and `test:all` tasks.

### Server
A basic push state server serving static assets is included by default. You can expand/enhance the server as needed for services and to create a more ambitious application.

### Flux
TODO


## Libraries

### Core
- [BTC](https://github.com/jupl/btc) 0.11.1

### Languages
- [Stylus](https://github.com/learnboost/stylus)

### Utilities
- [React](http://facebook.github.io/react/)
- [RxJS](http://reactive-extensions.github.io/RxJS/)
- [Routie](https://github.com/jgallen23/routie)
- [Nib](http://visionmedia.github.io/nib/)
