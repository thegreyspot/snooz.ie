define([
  'jquery',
  'underscore',
  'backbone',
  'fitText',
  'text!templates/home/serieThumbTemplate.html',
  /*'collections/cards/CardsCollection',
  'views/timeline/CircleView',*/
], function($, _, Backbone, fitText, serieThumbTemplate){
  var SerieThumbView = Backbone.View.extend({
    initialize: function(){

    },
    render: function(){
      var compiledTemplate = _.template(serieThumbTemplate, this.model.attributes);
      this.$el.append(compiledTemplate);
      this.$el = this.$el.find(".serie_thumb:last");
    },
    events:{
      'mouseenter .serie_thumb' : 'mouseenter',
      'mouseleave .serie_thumb' : 'mouseleave'
    },
    mouseenter: function(e){
      e.currentTarget.setZ(5);
    },
    mouseleave: function(e){
      e.currentTarget.setZ(1);
    }
  });

  return SerieThumbView;

});
