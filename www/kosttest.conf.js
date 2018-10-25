// Karma configuration
// Generated on Thu May 21 2015 10:13:20 GMT+0200 (Romance Summer Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

      '../www/lib/ionic/js/ionic.bundle.js',
      //'.../www/lib/firebase/firebase.js',
      //'.../www/lib/angularfire/dist/angularfire.js',
      '../www/lib/angular-mocks/angular-mocks.js',
      
      
      '../www/js/app.js',
      '../www/views/user/userService.js',
      '../www/views/user/userCtrl.js',
      '../www/views/user/*Test.js',
      '../www/views/home/homeCtrl.js',
      '../www/views/meal/mealService.js',
      '../www/views/meal/mealCtrl.js',
      '../www/views/meal/*Test.js'
      
      //'**/*tests.js'
    ],
    

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};