define([
	'jquery'
	, 'underscore'
	, 'backbone'
	, 'models/UserModel'
	, 'collections/UserCollection'
	, 'text!templates/groupTemplate.html'
], function($, _, Backbone, UserModel, UserCollection, groupTemplate){

	var UsersView = Backbone.View.extend({
	
		el: "body"
	
		, events: {
			"click #addUser": "addUser",
			"click .del": "removeUser",
		}
	
		, render: function() {
			var users = new UserCollection();
			var compiledTemplate = "";
			users.fetch({ 
				url: "js/init.json"    
				, success: function() {
					compiledTemplate = _.template( groupTemplate, {data:users.toJSON()} );
					$("#container").html(compiledTemplate);
			    }
			    , error: function(){
			    	console.log('There was some error in loading and processing the JSON file');
		    	}
		    });
			
		}
		
		, resetCollection : function() {
			var results = [{ first: 1, second: 2, third: 3, fourth: 4 }, { first: 5, second: 6, third: 7, fourth: 8}];
			var collection = new UserCollection();
			collection.reset(results);
			console.log(collection);
			var model = collection.pop();
			console.log(JSON.stringify(model.toJSON()));
		}
	
		, addUser: function() {
			//need to add data into "init.json"
			var name = $("#name").val();
			var age = $("#age").val();
		}
	
		, removeUser: function(arg) {
			var id = arg.target.id;
			this.render();
		}
	});

	return UsersView;

});