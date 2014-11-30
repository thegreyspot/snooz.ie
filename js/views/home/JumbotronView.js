define([
  'jquery',
  'underscore',
  'backbone',
  'fitText',
  'text!templates/jumbotronTemplate.html',
  '/js/libs/fitText/fitText.js'
], function($, _, Backbone, fitText, jumbotronTemplate){
  var JumbotronView = Backbone.View.extend({
    initialize: function(){

    },
    render: function(){
      var compiledTemplate = _.template(jumbotronTemplate, this.model);
      this.$el.append(compiledTemplate);

      this.$el.find("h1").fitText(0.8, { minFontSize: '30px', maxFontSize: '80px'});
      this.$el.find("h4").fitText(2.5, { minFontSize: '16px', maxFontSize: '25px'});

    }

  });
  return JumbotronView;
});
