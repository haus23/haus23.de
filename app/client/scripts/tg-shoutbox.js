
var backendUrl = 'https://bot.haus23.net/shouts';

// initially load and rendner the past shouts
loadShouts();
// get current user info
var user = loadUser();

// handler to push a new shout
document.getElementById('btn-shout').addEventListener('click',pushShout);

function loadShouts() {

}

function pushShout() {

}

function loadUser() {
    var url = window.location + '/user';
    console.log('location');
}