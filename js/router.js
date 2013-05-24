define([
  'jquery'
  , 'underscore'
  , 'backbone'
  , 'views/UsersView'
  , 'views/UserView'
], function($, _, Backbone, UsersView, UserView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
		"": "defaultAction"
		, "user/:id": "user"
    }
  });
  
  var initialize = function(){
  	var app_router = new AppRouter;
    
	app_router.on('route:user', function (init) {
		var userView = new UserView();
		userView.render(init);
    });
	
	app_router.on('route:defaultAction', function () {
		var usersView = new UsersView();
		usersView.render();
    });
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});