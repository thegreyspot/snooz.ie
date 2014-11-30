// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/header/HeaderView',
  'views/home/HomeView',

  //'models/session/SessionModel'
], function($, _, Backbone, HeaderView, HomeView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      //Define some URL routes
      '': 'home',
      'series': 'series'
    },
    initialize: function(){
    	//track every route change as a page view in google analytics
        this.bind('all', this.trackPageview);
    },
    home: function(){
      if(!this.headerView){
        this.headerView = new HeaderView();
        this.headerView.render();
      }
      var homeView = new HomeView({el: $('.main_content')});
      homeView.render();


      console.log("Home")
    },
    series: function(){
      if(!this.headerView){
        this.headerView = new HeaderView();
        this.headerView.render();
      }
      console.log("Series")
    }
    /*trackPageview: function () { //Google analytics
		var url = Backbone.history.getFragment();
		if (!/^\//.test(url)) url = '/' + url;
		ga('send', {
		  'hitType': 'pageview',
		  'page': url
		});
    }*/
  });
  var initialize = function(){
    var app_router = new AppRouter;

    app = new AppRouter();

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
