define(function (require) {
  'use strict';
  var Marionette = require('marionette');
  var Controller = require('controllers/Controller');
  return Marionette.AppRouter.extend({
    //"index" must be a method in AppRouter's controller
    appRoutes: {
      "": "index",
      "about": "about"
    }
  });
});