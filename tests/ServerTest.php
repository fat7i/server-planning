<?php

namespace Moebel\ServerPlanning\Test;

use Moebel\ServerPlanning\Models\Server;
use Moebel\ServerPlanning\Models\VirtualMachine;
use PHPUnit\Framework\TestCase;

class ServerTest extends TestCase
{
    public function testItCanCalculateAvailableResources()
    {
        $server  = new Server(2, 1024, 100);
        $server->addVirtualMachine(new VirtualMachine(1, 512, 50));

        $this->assertEquals(1, $server->getAvailableCpu());
        $this->assertEquals(512, $server->getAvailableMemory());
        $this->assertEquals(50, $server->getAvailableHdd());
    }
}
