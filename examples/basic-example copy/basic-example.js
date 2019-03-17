var config = {
        container: "#basic-example",

        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    node0 = {
        text: {
            attribute: "milk <= 0.5"
        },
        image: "../headshots/2.jpg"
    },
    node1 = {
        parent: node0,
        text: {
            attribute: "feathers <= 0.5"
        },
        image: "../headshots/2.jpg"
    },
    node2 = {
        parent: node1,
        text: {
            attribute: "fins <= 0.5"
        },
        image: "../headshots/2.jpg"
    },
    node3 = {
        parent: node2,
        text: {
            attribute: "backbone <= 0.5"
        },
        image: "../headshots/2.jpg"
    },
    node4 = {
        parent: node3,
        text: {
            attribute: "airborne <= 0.5"
        },
        image: "../headshots/2.jpg"
    },
    node5 = {
        parent: node4,
        text: {
            attribute: "predator <= 0.5"
        },
        image: "../headshots/2.jpg"
    },
    node6 = {
        parent: node5,
        text: {
            attribute: "legs <= 3.0"
        },
        image: "../headshots/2.jpg"
    },
    node7 = {
        parent: node6,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node8 = {
        parent: node6,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node9 = {
        parent: node5,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node10 = {
        parent: node4,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node11 = {
        parent: node3,
        text: {
            attribute: "aquatic <= 0.5"
        },
        image: "../headshots/2.jpg"
    },
    node12 = {
        parent: node11,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node13 = {
        parent: node11,
        text: {
            attribute: "eggs <= 0.5"
        },
        image: "../headshots/2.jpg"
    },
    node14 = {
        parent: node13,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node15 = {
        parent: node13,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node16 = {
        parent: node2,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node17 = {
        parent: node1,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },
    node18 = {
        parent: node0,
        text: {
            attribute: "gini = 0.0"
        },
        image: "../headshots/2.jpg"
    },




    chart_config = [
        config,
        node0,
        node1,
        node2,
        node3,
        node4,
        node5,
        node6,
        node7,
        node8,
        node9,
        node10,
        node11,
        node12,
        node13,
        node14,
        node15,
        node16,
        node17,
        node18
    ];




// Another approach, same result
// JSON approach

/*
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1'
            }
        },
        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            image: "../headshots/2.jpg",
            children: [
                {
                    text:{
                        name: "Joe Linux",
                        title: "Chief Technology Officer",
                    },
                    stackChildren: true,
                    image: "../headshots/1.jpg",
                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                            image: "../headshots/8.jpg"
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                            image: "../headshots/9.jpg"
                        }
                    ]
                },
                {
                    stackChildren: true,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    image: "../headshots/5.jpg",
                    children: [
                        {
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                            image: "../headshots/7.jpg"
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                            image: "../headshots/4.jpg"
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                            image: "../headshots/11.jpg"
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    image: "../headshots/6.jpg",
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                            image: "../headshots/10.jpg"
                        }
                    ]
                }
            ]
        }
    };

*/