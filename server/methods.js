Meteor.methods({
	sendMessage : function(message) {
		var userId = this.userId,
			currentMoment = new moment();

		var messageObj = {
			from : userId,
			message : message,
			createdAt : currentMoment 
		}

		Messages.insert(messageObj);
	}
});
