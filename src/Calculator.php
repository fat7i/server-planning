<?php

namespace Moebel\ServerPlanning;

use Moebel\ServerPlanning\Models\Server;
use Moebel\ServerPlanning\Exceptions\EmptyVMCollectionException;
use Moebel\ServerPlanning\Models\VirtualMachine;
use Moebel\ServerPlanning\Collection\ServerCollection;
use Moebel\ServerPlanning\Collection\VirtualMachinesCollection;

/**
 * Class Calculator
 * @package Moebel\ServerPlanning
 */
class Calculator
{
    /**
     * @var ServerCollection
     */
    private $serverCollection;

    /**
     * Calculator constructor.
     */
    public function __construct()
    {
        $this->serverCollection = new ServerCollection();
    }

    /**
     * @param Server $server
     * @param VirtualMachinesCollection $vmMachines
     * @return int
     * @throws EmptyVMCollectionException
     */
    public function calculate(Server $server, VirtualMachinesCollection $vmMachines): int
    {
        if ($vmMachines->isEmpty()) {
            throw new EmptyVMCollectionException('No Virtual machines found!');
        }

        $isFit = function (Server $server, VirtualMachine $virtualMachine): bool {
            return $server->getAvailableCpu() >= $virtualMachine->cpu &&
                $server->getAvailableMemory() >= $virtualMachine->memory &&
                $server->getAvailableHdd() >= $virtualMachine->hdd;
        };

        foreach ($vmMachines->getVirtualMachines() as $virtualMachine) {
            if ($isFit($server, $virtualMachine) === false) {
                continue;
            } else {
                $server->addVirtualMachine($virtualMachine);
            }

            $nextVirtualMachine = $virtualMachine ?? null;
            if ($nextVirtualMachine === null || $isFit($server, $nextVirtualMachine) === false) {
                $this->serverCollection->add($server);
                $server = $server->initializeServer();
            }
        }

        return $this->serverCollection->getServersCount();
    }
}
