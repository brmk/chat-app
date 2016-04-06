Template.chatMessages.helpers({
	messages : function() {
		return Messages.find().fetch();
	}
});
