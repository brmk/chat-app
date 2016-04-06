Template.chatMessages.helpers({
	messages : function() {
		return Messages.find().fetch();
	}
});

Template.chatMessages.onCreated(function(){
	this.subscribe('messages');
	this.subscribe('users');
})