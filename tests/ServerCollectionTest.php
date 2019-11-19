<?php

namespace Moebel\ServerPlanning\Test;

use Moebel\ServerPlanning\Models\Server;
use Moebel\ServerPlanning\Collection\ServerCollection;
use PHPUnit\Framework\TestCase;

class ServerCollectionTest extends TestCase
{
    public function testItCanAddNewServers()
    {
        $serversCollection = new ServerCollection();

        $serversCollection->add(new Server(1, 10, 20));
        $this->assertEquals(1, $serversCollection->getServersCount());

        $serversCollection->add(new Server(1, 10, 20));
        $this->assertEquals(2, $serversCollection->getServersCount());
    }
}
