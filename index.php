<?php

use Moebel\ServerPlanning\Calculator;
use Moebel\ServerPlanning\Models\Server;
use Moebel\ServerPlanning\Models\VirtualMachine;
use Moebel\ServerPlanning\Collection\VirtualMachinesCollection;

require_once('vendor/autoload.php');

$server = new Server(2, 32, 100);

/*
 *  - Server type = {CPU: 2, RAM: 32, HDD: 100}
 *  - Virtual Machines = [
 *          {CPU: 1, RAM: 16, HDD: 10},
 *          {CPU: 1, RAM: 16, HDD: 10},
 *          {CPU: 2, RAM: 32, HDD: 100}
 * ]
 *  - Result = 2
 */
$virtualMachinesCollection = new VirtualMachinesCollection();
$virtualMachinesCollection->add(new VirtualMachine(1, 16, 10));
$virtualMachinesCollection->add(new VirtualMachine(1, 16, 10));
$virtualMachinesCollection->add(new VirtualMachine(1, 32, 100));

try {
    $calculator = new Calculator();
    $neededServersCount = $calculator->calculate($server, $virtualMachinesCollection);
} catch (\Moebel\ServerPlanning\Exceptions\EmptyVMCollectionException $e) {
    echo $e->getMessage();
}

echo "[$neededServersCount] server(s) is needed!";
