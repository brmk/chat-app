Template.chatForm.events({
    'submit .chat-form' : function(e, tmpl) {
        e.preventDefault();
        var message = tmpl.$('.chat-input').val().trim();

        Meteor.call('sendMessage', message);

        tmpl.$('.chat-input').val('');
    }
});
