<?php

namespace Moebel\ServerPlanning\Test;

use Moebel\ServerPlanning\Calculator;
use Moebel\ServerPlanning\Exceptions\EmptyVMCollectionException;
use Moebel\ServerPlanning\Models\Server;
use Moebel\ServerPlanning\Models\VirtualMachine;
use Moebel\ServerPlanning\Collection\VirtualMachinesCollection;
use PHPUnit\Framework\TestCase;

/**
 * Class CalculatorTest
 * @package Moebel\ServerPlanning\Test
 */
class CalculatorTest extends TestCase
{
    /**
     * @var Server
     */
    private $server;

    /**
     * @var Calculator
     */
    private $calculator;

    /**
     * {@inheritdoc}
     */
    protected function setUp(): void
    {
        parent::setUp();
        $this->server = new Server(2, 32, 100);
        $this->calculator = new Calculator();
    }

    public function testItThrowExceptionInCaseOfEmptyCollection()
    {
        $this->expectException(EmptyVMCollectionException::class);
        $virtualMachinesCollection = new VirtualMachinesCollection();

        $this->calculator->calculate($this->server, $virtualMachinesCollection);
    }

    public function testItCanReturnTheCountOfServers()
    {
        $virtualMachinesCollection = new VirtualMachinesCollection();
        $virtualMachinesCollection->add(new VirtualMachine(1, 16, 10));
        $virtualMachinesCollection->add(new VirtualMachine(1, 16, 10));
        $virtualMachinesCollection->add(new VirtualMachine(2, 32, 100));

        $serversCount = $this->calculator->calculate($this->server, $virtualMachinesCollection);

        $this->assertEquals(2, $serversCount);
    }

    public function testItCanSkipUnfittedVirtualMachine()
    {
        $virtualMachinesCollection = new VirtualMachinesCollection();
        $virtualMachinesCollection->add(new VirtualMachine(3, 64, 200));

        $serversCount = $this->calculator->calculate($this->server, $virtualMachinesCollection);

        $this->assertEquals(0, $serversCount);
    }

    public function testItCanReturnTheCountOfServersAndSkipUnfittedVm()
    {
        $virtualMachinesCollection = new VirtualMachinesCollection();
        $virtualMachinesCollection->add(new VirtualMachine(1, 16, 50));
        $virtualMachinesCollection->add(new VirtualMachine(1, 16, 50));
        $virtualMachinesCollection->add(new VirtualMachine(3, 64, 100));

        $serversCount = $this->calculator->calculate($this->server, $virtualMachinesCollection);

        $this->assertEquals(1, $serversCount);
    }
}
