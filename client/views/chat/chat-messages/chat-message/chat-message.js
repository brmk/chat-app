Template.chatMessage.onRendered(function(){
    $('.chat-messages').scrollTop($('.chat-messages-container').height());
})


Template.chatMessage.helpers({

    author : function() {
        return Meteor.users.findOne(this.from).username;
    },

    fromNow : function() {
        return moment(this.createdAt).fromNow();
    }
});
