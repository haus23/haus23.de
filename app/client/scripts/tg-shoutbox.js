
var backendUrl = 'https://bot.haus23.net/shouts';

// DOM caching
var $shoutMsg = $('#shout-msg');
var $shoutItemTpl = $('#shout-item-tpl');
var $shoutList = $('#shout-list');

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
    $.getJSON(backendUrl).done(function (data) {
        $(data).each(function(shout){
            var $item = $($shoutItemTpl);
            $('#shout-author',$item).html(shout.author);
            $('#shout-content',$item).html(shout.msg);
            $shoutList.prepend($item);
        });
    });
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
        data: JSON.stringify({
            author: user.name,
            msg: msg
        }),
        dataType: 'json'
    });
    $shoutMsg.val('');
}
