define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/AboutView', 'views/HeaderView', 'views/SidebarView', 'views/FooterView'],
  function (App, Backbone, Marionette, WelcomeView, AboutView, HeaderView, SidebarView, FooterView) {
    return Backbone.Marionette.Controller.extend({
      initialize: function (options) {
        //App.rootLayout.headerRegion.show(new HeaderView());
        App.rootLayout.sidebarRegion.show(new SidebarView());
        App.rootLayout.footerRegion.show(new FooterView());
      },
      index: function () {
        App.rootLayout.mainRegion.show(new WelcomeView());
      },
      about: function () {
        App.rootLayout.mainRegion.show(new AboutView());
      }
    });
  });