
var backendUrl = 'https://bot.haus23.net/shouts';

// initially load and rendner the past shouts
loadShouts();
// get current user info
var url = window.location + '/user';
var user;
$.getJSON(url).done(function(data) {
    user = data;
    console.log(user);
});

// handler to push a new shout
document.getElementById('btn-shout').addEventListener('click',pushShout);

function loadShouts() {

}

function pushShout() {

}
