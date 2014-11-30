define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/header/headerTemplate.html'
], function($, _, Backbone, headerTemplate){
  var HeaderView = Backbone.View.extend({
    el: $(".main"),
    initialize: function(){

    },
    render: function(){
      var compiledTemplate = _.template(headerTemplate, this.model);
      this.$el.prepend(compiledTemplate);
    },
    events: {
      'click #navicon' : 'open'
    },
    open: function(){
      document.getElementById('drawerPanel').togglePanel();
    }

    });

    return HeaderView;

});
