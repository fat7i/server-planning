var classes = [
    {
        "name": "Moebel\\ServerPlanning\\Collection\\ServerCollection",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "getIterator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getServersCount",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 3,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "IteratorAggregate",
            "Traversable",
            "Moebel\\ServerPlanning\\Models\\Server"
        ],
        "parents": [],
        "lcom": 1,
        "length": 8,
        "vocabulary": 4,
        "volume": 16,
        "difficulty": 2.5,
        "effort": 40,
        "level": 0.4,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 6.4,
        "number_operators": 3,
        "number_operands": 5,
        "number_operators_unique": 2,
        "number_operands_unique": 2,
        "cloc": 14,
        "loc": 31,
        "lloc": 17,
        "mi": 107.74,
        "mIwoC": 64.59,
        "commentWeight": 43.15,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 2.33,
        "relativeSystemComplexity": 2.33,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 7,
        "totalSystemComplexity": 7,
        "package": "Moebel\\ServerPlanning\\",
        "pageRank": 0.07,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Moebel\\ServerPlanning\\Collection\\VirtualMachinesCollection",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIterator",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "add",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getVirtualMachines",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isEmpty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "IteratorAggregate",
            "Moebel\\ServerPlanning\\Models\\VirtualMachine"
        ],
        "parents": [],
        "lcom": 1,
        "length": 16,
        "vocabulary": 7,
        "volume": 44.92,
        "difficulty": 3.75,
        "effort": 168.44,
        "level": 0.27,
        "bugs": 0.01,
        "time": 9,
        "intelligentContent": 11.98,
        "number_operators": 6,
        "number_operands": 10,
        "number_operators_unique": 3,
        "number_operands_unique": 4,
        "cloc": 23,
        "loc": 48,
        "lloc": 25,
        "mi": 101.72,
        "mIwoC": 57.8,
        "commentWeight": 43.92,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.7,
        "relativeSystemComplexity": 2.7,
        "totalStructuralComplexity": 5,
        "totalDataComplexity": 8.5,
        "totalSystemComplexity": 13.5,
        "package": "Moebel\\ServerPlanning\\",
        "pageRank": 0.07,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Moebel\\ServerPlanning\\Models\\Server",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "addVirtualMachine",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAvailableCpu",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAvailableMemory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAvailableHdd",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initializeServer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 5,
        "nbMethods": 5,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 5,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "Moebel\\ServerPlanning\\Models\\AbstractResource",
            "Moebel\\ServerPlanning\\Models\\VirtualMachine",
            "self"
        ],
        "parents": [
            "Moebel\\ServerPlanning\\Models\\AbstractResource"
        ],
        "lcom": 1,
        "length": 38,
        "vocabulary": 8,
        "volume": 114,
        "difficulty": 8.1,
        "effort": 923.4,
        "level": 0.12,
        "bugs": 0.04,
        "time": 51,
        "intelligentContent": 14.07,
        "number_operators": 11,
        "number_operands": 27,
        "number_operators_unique": 3,
        "number_operands_unique": 5,
        "cloc": 22,
        "loc": 59,
        "lloc": 37,
        "mi": 91.4,
        "mIwoC": 50.85,
        "commentWeight": 40.55,
        "kanDefect": 0.84,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 4.2,
        "relativeSystemComplexity": 4.2,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 21,
        "totalSystemComplexity": 21,
        "package": "Moebel\\ServerPlanning\\Models\\",
        "pageRank": 0.11,
        "afferentCoupling": 2,
        "efferentCoupling": 3,
        "instability": 0.6,
        "violations": {}
    },
    {
        "name": "Moebel\\ServerPlanning\\Models\\VirtualMachine",
        "interface": false,
        "abstract": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Moebel\\ServerPlanning\\Models\\AbstractResource"
        ],
        "parents": [
            "Moebel\\ServerPlanning\\Models\\AbstractResource"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 4,
        "loc": 8,
        "lloc": 4,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Moebel\\ServerPlanning\\Models\\",
        "pageRank": 0.18,
        "afferentCoupling": 2,
        "efferentCoupling": 1,
        "instability": 0.33,
        "violations": {}
    },
    {
        "name": "Moebel\\ServerPlanning\\Models\\AbstractResource",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 12,
        "vocabulary": 5,
        "volume": 27.86,
        "difficulty": 1.13,
        "effort": 31.35,
        "level": 0.89,
        "bugs": 0.01,
        "time": 2,
        "intelligentContent": 24.77,
        "number_operators": 3,
        "number_operands": 9,
        "number_operators_unique": 1,
        "number_operands_unique": 4,
        "cloc": 9,
        "loc": 22,
        "lloc": 13,
        "mi": 107.27,
        "mIwoC": 65.45,
        "commentWeight": 41.83,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 3,
        "relativeSystemComplexity": 3,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 3,
        "totalSystemComplexity": 3,
        "package": "Moebel\\ServerPlanning\\Models\\",
        "pageRank": 0.45,
        "afferentCoupling": 2,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Moebel\\ServerPlanning\\Exceptions\\EmptyVMCollectionException",
        "interface": false,
        "abstract": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 4,
        "loc": 8,
        "lloc": 4,
        "mi": 215.46,
        "mIwoC": 171,
        "commentWeight": 44.46,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Moebel\\ServerPlanning\\Exceptions\\",
        "pageRank": 0.07,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Moebel\\ServerPlanning\\Calculator",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "calculate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 10,
        "ccn": 9,
        "ccnMethodMax": 9,
        "externals": [
            "Moebel\\ServerPlanning\\Collection\\ServerCollection",
            "Moebel\\ServerPlanning\\Models\\Server",
            "Moebel\\ServerPlanning\\Collection\\VirtualMachinesCollection",
            "Moebel\\ServerPlanning\\Exceptions\\EmptyVMCollectionException"
        ],
        "parents": [],
        "lcom": 1,
        "length": 51,
        "vocabulary": 15,
        "volume": 199.25,
        "difficulty": 18.29,
        "effort": 3643.45,
        "level": 0.05,
        "bugs": 0.07,
        "time": 202,
        "intelligentContent": 10.9,
        "number_operators": 19,
        "number_operands": 32,
        "number_operators_unique": 8,
        "number_operands_unique": 7,
        "cloc": 16,
        "loc": 47,
        "lloc": 31,
        "mi": 89.44,
        "mIwoC": 50.16,
        "commentWeight": 39.29,
        "kanDefect": 0.59,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.3,
        "relativeSystemComplexity": 81.3,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0.6,
        "totalSystemComplexity": 162.6,
        "package": "Moebel\\ServerPlanning\\",
        "pageRank": 0.05,
        "afferentCoupling": 0,
        "efferentCoupling": 4,
        "instability": 1,
        "violations": {}
    }
]