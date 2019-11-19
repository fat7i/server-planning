<?php

namespace Moebel\ServerPlanning\Models;

use Moebel\ServerPlanning\Models\VirtualMachine;

/**
 * Class Server
 * @package Moebel\ServerPlanning\Models
 */
class Server extends AbstractResource
{
    /**
     * @var VirtualMachine[]
     */
    private $virtualMachines = [];

    /**
     * @param VirtualMachine $virtualMachine
     */
    public function addVirtualMachine(VirtualMachine $virtualMachine): void
    {
        $this->virtualMachines[] = $virtualMachine;
    }

    /**
     * @return int
     */
    public function getAvailableCpu(): int
    {
        $availableCpu = $this->cpu;
        foreach ($this->virtualMachines as $virtualMachine) {
            $availableCpu -= $virtualMachine->cpu;
        }
        return $availableCpu;
    }

    /**
     * @return int
     */
    public function getAvailableMemory(): int
    {
        $availableMemory = $this->memory;
        foreach ($this->virtualMachines as $virtualMachine) {
            $availableMemory -= $virtualMachine->memory;
        }
        return $availableMemory;
    }

    /**
     * @return int
     */
    public function getAvailableHdd(): int
    {
        $availableHdd = $this->hdd;
        foreach ($this->virtualMachines as $virtualMachine) {
            $availableHdd -= $virtualMachine->hdd;
        }
        return $availableHdd;
    }

    /**
     * @return $this
     */
    public function initializeServer(): self
    {
        return new self($this->cpu, $this->memory, $this->hdd);
    }
}
