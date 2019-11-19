<?php

namespace Moebel\ServerPlanning\Collection;

use Moebel\ServerPlanning\Models\VirtualMachine;
use IteratorAggregate;

/**
 * Class VirtualMachinesCollection
 * @package Moebel\ServerPlanning
 */
class VirtualMachinesCollection implements IteratorAggregate
{
    /**
     *
     * @var VirtualMachine[];
     */
    private $machines = [];
    
    /**
     * @param VirtualMachine[]
     */
    public function __construct(array $machines = [])
    {
        $this->machines = $machines;
    }

    /**
     * @return VirtualMachine[]
     */
    public function getIterator(): array
    {
        return $this->machines;
    }

    /**
     * @param VirtualMachine $machine
     */
    public function add(VirtualMachine $machine): void
    {
        $this->machines[] = $machine;
    }
    
    /**
     * @return VirtualMachine[]
     */
    public function getVirtualMachines(): array
    {
        return $this->getIterator();
    }

    /**
     * @return bool
     */
    public function isEmpty(): bool
    {
        return count($this->getIterator()) === 0;
    }
}
