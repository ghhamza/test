define(function (require) {
  'use strict';

  var App = require('App');
  var Marionette = require('marionette');
  var Model = require('models/Model');
  var template = require('text!templates/welcome.html');

  return Marionette.ItemView.extend({
    //Template HTML string
    template: _.template(template),
    model: new Model({
      mobile: App.mobile
    }),

    // View Event Handlers
    events: {

    }
  });
});