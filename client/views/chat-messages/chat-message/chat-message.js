Template.chatMessage.helpers({
	fromNow : function () {
		return moment(this.createdAt).fromNow();
	},

	username: function () {
	    return Meteor.users.findOne({ _id: this.from }).username;
	}
});