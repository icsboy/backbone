define([
	'jquery'
	, 'underscore'
	, 'backbone'
	, 'models/UserModel'
	, 'collections/UserCollection'
	, 'text!templates/userTemplate.html'
], function($, _, Backbone, UserModel, UserCollection, userTemplate){
	
	var UserView = Backbone.View.extend({
	
		el: "#container",
	
		render: function(id) {
			var users = new UserCollection();
			var compiledTemplate = "";
			users.fetch({ 
				url: "js/init.json"    
				, success: function() {
					compiledTemplate = _.template( userTemplate, users.toJSON()[id] );
					$("#container").html(compiledTemplate);
			    }
			    , error: function(){
			    	console.log('There was some error in loading and processing the JSON file');
		    	}
		    });
		}
	});

	return UserView;

});