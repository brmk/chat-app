Meteor.methods({
    'sendMessage' : function(message) {
        var userId = this.userId,
            date = new moment();
        Messages.insert({
            from: userId,
            message : message,
            createdAt : date
        });
    }
});
