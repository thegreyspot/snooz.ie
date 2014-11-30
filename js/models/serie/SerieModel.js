define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
	var SerieModel = Backbone.Model.extend({
		defaults: {
			slug: null,
			title: null,
			cover_image: null,
			url: false,
			/*year: null,
		    isLast: false,//Is last card, so timeline ends
		    custom: false, //does this need to load a special view
		    			  //if true, load view: [template_file]CardView.js
		    code: [],
		    design:[],
		    images:[]*/
		},
		initialize: function () {

	   }
	});

  	return SerieModel;
});
