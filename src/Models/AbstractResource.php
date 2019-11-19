<?php

namespace Moebel\ServerPlanning\Models;

abstract class AbstractResource
{
    /**
     * @var int
     */
    public $cpu;

    /**
     * @var int
     */
    public $memory;

    /**
     * @var int
     */
    public $hdd;

    public function __construct(int $cpu, int $memory, int $hdd)
    {
        $this->cpu = $cpu;
        $this->memory = $memory;
        $this->hdd = $hdd;
    }
}
