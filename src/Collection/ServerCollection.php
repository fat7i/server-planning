<?php

namespace Moebel\ServerPlanning\Collection;

use IteratorAggregate;
use Moebel\ServerPlanning\Models\Server;

/**
 * Class ServerCollection
 * @package Moebel\ServerPlanning
 */
class ServerCollection implements IteratorAggregate
{
    /** @var ServerCollection[] */
    private $servers = [];

    /**
     * @return ServerCollection[]|\Traversable
     */
    public function getIterator(): \Traversable
    {
        return $this->servers;
    }

    /**
     * @param Server $server
     */
    public function add(Server $server): void
    {
        $this->servers[] = $server;
    }

    /**
     * @return int
     */
    public function getServersCount(): int
    {
        return count($this->servers);
    }
}
