define([
	'jquery'
	, 'underscore'
	, 'backbone'
], function($, _, Backbone) {
	
	
	var UserModel = Backbone.Model.extend({
		defaults: {
			name: ""
			, age: 0
		}
	});

  	return UserModel;

});