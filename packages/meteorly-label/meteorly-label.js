// Write your package code here!
if(Meteor.isClient){
    function drawMeteorlyLogo() {
        var logo = '               _                       _        \r\n  \/\\\/\\    ___ | |_   ___   ___   _ __ | | _   _ \r\n \/    \\  \/ _ \\| __| \/ _ \\ \/ _ \\ | \'__|| || | | |\r\n\/ \/\\\/\\ \\|  __\/| |_ |  __\/| (_) || |   | || |_| |\r\n\\\/    \\\/ \\___| \\__| \\___| \\___\/ |_|   |_| \\__, |\r\n                                          |___\/ \n \n MeteorJS Development Agency - https://meteorly.com \n \n Want to hire us or join our epic team - write to us: info@meteorly.com \n ';
    
        $('html').prepend('<!--' + logo + '-->')
        console.log(logo);
    }
    drawMeteorlyLogo();
}