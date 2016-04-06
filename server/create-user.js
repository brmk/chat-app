getRandomColor = function() {
    var color = 'rgb(';
    for (var i = 0; i < 3; i++) {
        color += Math.floor(Math.random() * 255);
        if (i < 2) {
            color += ','
        }
    }
    color += ')';
    return color;
}

if (Meteor.isServer) {
    Accounts.onCreateUser(function(options, user) {
        user.color = getRandomColor();
        return user;
    });
}