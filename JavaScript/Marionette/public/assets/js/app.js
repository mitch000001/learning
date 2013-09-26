requirejs.config({
  baseUrl: "./assets/js",
  paths: {
    app                   : "app",
    underscore            : "vendor/underscore/underscore",
    jquery                : "vendor/jquery/jquery",
    backbone              : "vendor/backbone/backbone",
    "backbone.wreqr"      : "vendor/backbone.wreqr/lib/amd/backbone.wreqr",
    "backbone.babysitter" : "vendor/backbone.babysitter/lib/amd/backbone.babysitter",
    marionette            : "vendor/backbone.marionette/lib/core/amd/backbone.marionette",
    json2                 : "vendor/json2/json2"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }

});

require(["app/main"]);
