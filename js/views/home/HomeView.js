define([
  'jquery',
  'underscore',
  'backbone',
  'collections/series/SeriesCollection',
  'views/home/SerieThumbView',
  'views/home/JumbotronView',
], function($, _, Backbone, SeriesCollection, SerieThumbView, JumbotronView){
  var HomeView = Backbone.View.extend({
    initialize: function(){

    },
    render: function(){
      var that = this;
      //Load Jumbotron
      var temp = {title: "Sleep Easy",
                  subtitle: "Let your ears go on an adventure to find blessful sleep"};
      var jumbotronView = new JumbotronView({el: this.$el, model: temp});
      //jumbotronView.render();

      //Load Series
      var seriesCollection = new SeriesCollection();
      console.log(seriesCollection);

      that.$el.append('<h1 class="title">Series</h1><section class="series_thumbs"></section>');

      $.each(seriesCollection.models, function(i, serie){
        var serieThumbView = new SerieThumbView({ el: that.$el.find(".series_thumbs:last"), model: serie });
        serieThumbView.render();
      });
    }
  });
  return HomeView;
});
