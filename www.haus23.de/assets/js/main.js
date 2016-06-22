(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var backendUrl = 'https://bot.haus23.net/shouts';

// DOM caching
var $shoutMsg = $('#shout-msg');

// initially load and rendner the past shouts
loadShouts();
// get current user info
var url = window.location + '/user';
var user;
$.getJSON(url).done(function(data) {
    user = data;
    if( !user.anonymous ) {
        // show shout area
        $('.shout-area').show();
        // handler to push a new shout
        document.getElementById('btn-shout').addEventListener('click',pushShout);
    }
});


function loadShouts() {

}

function pushShout() {
    var msg = $shoutMsg.val().trim();
    if( user.anonymous || msg.length == 0) {
        return;
    }
    $.ajax({
        type: 'POST',
        url: backendUrl,
        contentType: "application/json; charset=utf-8",
        data: {
            author: user.name,
            msg: msg
        }
    });
    $shoutMsg.val('');
}

},{}]},{},[1]);
