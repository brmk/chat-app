Template.chat.onCreated(function(){
    this.subscribe('messages');
    this.subscribe('users');
})
