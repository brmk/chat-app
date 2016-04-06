Template.chatInput.events({
	'click .send-message' : function(e, tmpl) {
		e.preventDefault();

		var message = tmpl.$('.message-input').val().trim();
		if(!message) return;

		sendMessage(message, function() {
			Materialize.toast('Sent');
			tmpl.$('.message-input').val('');
		});
	},
	'keyup .message-input' : function(e, tmpl) {
		e.preventDefault();

		var message = tmpl.$('.message-input').val().trim();
	    if (e.keyCode === 13 && message ) {
	    	sendMessage(message, function() {
				tmpl.$('.message-input').val('');
			});
		}
	}

});

function sendMessage(message, callback) {
	Meteor.call('sendMessage', message, function(error){
		if(error){
			Materialize.toast(error.reason);
			return;
		} 
		if(typeof callback === 'function')
			callback();
	});
}