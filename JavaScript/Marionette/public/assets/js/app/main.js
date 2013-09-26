define(function (require) {

  var Marionette = require('marionette');

  var App = new Marionette.Application({
    mainRegion: "#main-content"
  });
  App.addInitializer(function(options){
    var myView = new MyView({
      model: options.someModel
    });
    MyApp.mainRegion.show(myView);
  });
  var View = Marionette.ItemView.extend({
    template: "#foo"
  });
  App.mainRegion.show(new View());
  return App;
});
