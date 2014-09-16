define(['backbone', './DialogueModel'], function(Backbone, DialogueModel){
	var DialogueCollection = Backbone.Collection.extend({
		model: DialogueModel
	});
	//DialogueCollection = new DialogueCollection();
	return DialogueCollection;
});