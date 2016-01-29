define(function (require) {
  'use strict';
  var $ = require('jquery');
  var Backbone = require('backbone');
  var bootstrap = require('bootstrap');
  var highcharts = require('highcharts');
  var _ = require('underscore');
  var RootLayoutView = require('layouts/RootLayoutView');
  require('marionette');
  require('adminlte');

  var App = new Backbone.Marionette.Application();

  App.rootLayout = new RootLayoutView({
    regions: {
      //headerRegion: ".main-header",
      sidebarRegion: ".main-sidebar",
      mainRegion: ".content-wrapper",
      footerRegion: ".main-footer"
    }
  });

  function isMobile() {
    var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
    return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
  }

  App.static = {};

  App.static.mobile = isMobile();

  App.on('start', function(options) {
    if (Backbone.history) Backbone.history.start();
  });

  return App;

});