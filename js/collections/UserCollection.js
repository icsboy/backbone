define([
	'jquery'
	, 'underscore'
	, 'backbone'
	, 'models/UserModel'
], function($, _, Backbone, UserModel){
	
	var UserCollection = Backbone.Collection.extend({
		model: UserModel
	});

	return UserCollection;

});