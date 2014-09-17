var Mediator = require("mediator-js").Mediator;
var mediator =  new Mediator();
mediator.subscribe('add-user-to-radio', function(){
	console.log('subscribed');
});
return mediator;