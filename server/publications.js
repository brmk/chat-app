Meteor.publish('users', function () {
    return Meteor.users.find({}, { 
    	fields: {
    		username: 1 
    	} 
    });
});

Meteor.publish('messages', function () {
    return Messages.find();
});