Template.chatMessage.helpers({
	fromNow : function () {
		return moment(this.createdAt).from(TimeSync.serverTime());
	},

	user: function () {
	    return Meteor.users.findOne({ _id: this.from });
	}
});

Template.chatMessage.onRendered(function(){
	var $scrollable = $('.chat-messages');
	$scrollable.scrollTop($scrollable.prop("scrollHeight"));
});