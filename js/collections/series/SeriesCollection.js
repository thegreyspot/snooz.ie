define([
  'jquery',
  'underscore',
  'backbone',
  'models/serie/SerieModel'
], function($, _, Backbone, SerieModel){
  var SeriesCollection = Backbone.Collection.extend({
    model: SerieModel,
    initialize: function(){
      var i = 0;
      this.add([
        {
          id: i++,
          slug: "newmexico",
          title: "New Mexico"
        },
        {
          id: i++,
          slug: "kawaii",
          title: "Kauai, Hawaii"
        },
        {
          id: i++,
          slug: "oahu",
          title: "Oahu, Hawaii"
        }
      ]);
    }
  });

  return SeriesCollection;
});
