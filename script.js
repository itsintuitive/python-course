//html
var app = document.getElementById('typewriter1');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('')
    .pauseFor(500)
    .typeString('Welcome!')
    .start();


//--------------------------------------------------------------------


 var app = document.getElementById('credits');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('')
    .pauseFor(3500)
    .typeString('Made by ')
    .typeString('Ethan Ng')
    .pauseFor(2500)
    .deleteChars(8)
    .pauseFor(2500)
    .typeString('Arnav Hak')
    .pauseFor(2500)
    .deleteChars(9)
    .pauseFor(2500)
    .typeString('Coders')
    .start();




//about
    var app = document.getElementById('typewriter2');

var typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('')
    .pauseFor(500)
    .typeString('About Us')
    .start();