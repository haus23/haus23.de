<?php

namespace Haus23\Service;

class SmfBridge
{
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
