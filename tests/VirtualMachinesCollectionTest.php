<?php

namespace Moebel\ServerPlanning\Test;

use Moebel\ServerPlanning\Models\VirtualMachine;
use Moebel\ServerPlanning\Collection\VirtualMachinesCollection;
use PHPUnit\Framework\TestCase;

class VirtualMachinesCollectionTest extends TestCase
{
    public function testItCanAddNewMachine()
    {
        $machines = [
            new VirtualMachine(1, 16, 10),
            new VirtualMachine(1, 16, 10),
        ];
        
        $virtualMachineCollection = new VirtualMachinesCollection($machines);
        $this->assertCount(2, $virtualMachineCollection->getVirtualMachines());
        
        $virtualMachineCollection->add(new VirtualMachine(1, 16, 10));
        $this->assertCount(3, $virtualMachineCollection->getVirtualMachines());
    }
}
