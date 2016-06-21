<?php

namespace Haus23\Service;

class SmfBridge
{
    public function getUserInfo() {

        // The Global SMF context
        global $context;

        $user = array();
        if( !$context['user']['is_logged']) {
            $user['anonymous'] = true;
            $user['id'] = -2;
        } else {
            $userData = $context['user'];
            $user['anonymous'] = false;
            $user['name'] = $userData['name'];
            $user['avatar'] = $userData['avatar']['href'];
            $user['id'] = $userData['id'];
            $user['pm'] = $userData['messages'];
            $user['pm_unread'] = $userData['unread_messages'];
            $user['logout_link'] = ssi_logout('/', 'noecho');
        }
        return $user;
    }

    public function recentTopics() {

        $topics = array();

        $smfTopics = ssi_recentTopics(5,null,null,'noecho');

        foreach( $smfTopics as $t ) {

            $p = array();
            $p['subject'] = $t['short_subject'];
            $p['href'] = $t['href'];
            $p['poster'] = $t['poster']['name'];
            $p['poster_href'] = $t['poster']['href'];
            $p['date'] = strip_tags($t['time']);
            $p['unread'] = $t['is_new'];

            $topics[] = $p;
        }

        return $topics;
    }

}
