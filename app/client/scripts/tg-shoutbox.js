
var io = require("socket.io-client");

var backendUrl = 'https://bot.haus23.net';

// DOM query caching
var $shoutMsg     = $('#shout-msg');
var $shoutItemTpl = $('#shout-item-tpl').html();
var $shoutList    = $('#shout-list');

// Build up connection
var socket = io(backendUrl);
socket.on('connect', function () {
    console.log('Yeah!');
    socket.emit('req shouts');
});

socket.on('snd shouts', function (data) {
    $.each(data.shouts, function(){
        var shout = this;
        var $item = $($shoutItemTpl);
        $('#shout-author',$item).html(shout.author);
        $('#shout-content',$item).html(shout.msg);
        $shoutList.prepend($item);
    });
});

// // initially load and rendner the past shouts
// loadShouts();
// // get current user info
// var url = window.location + '/user';
// var user;
// $.getJSON(url).done(function(data) {
//     user = data;
//     if( !user.anonymous ) {
//         // show shout area
//         $('.shout-area').show();
//         // handler to push a new shout
//         document.getElementById('btn-shout').addEventListener('click',pushShout);
//     }
// });
//
//
// function loadShouts() {
//     $.getJSON(backendUrl).done(function (data) {
//         $.each(data, function(){
//             var shout = this;
//             var $item = $($shoutItemTpl);
//             $('#shout-author',$item).html(shout.author);
//             $('#shout-content',$item).html(shout.msg);
//             $shoutList.prepend($item);
//         });
//     });
// }
//
// function pushShout() {
//     var msg = $shoutMsg.val().trim();
//     if( user.anonymous || msg.length == 0) {
//         return;
//     }
//     $.ajax({
//         type: 'POST',
//         url: backendUrl,
//         contentType: "application/json; charset=utf-8",
//         data: JSON.stringify({
//             author: user.name,
//             msg: msg
//         }),
//         dataType: 'json'
//     });
//     $shoutMsg.val('');
// }
