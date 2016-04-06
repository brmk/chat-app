Template.chatMessage.helpers({
	fromNow : function () {
		return moment(this.createdAt).fromNow();
	},

	username: function () {
	    return Meteor.users.findOne({ _id: this.from }).username;
	}
});

Template.chatMessage.onRendered(function(){
	var $scrollable = $('.chat-messages');
	$scrollable.scrollTop($scrollable.prop("scrollHeight"));
});