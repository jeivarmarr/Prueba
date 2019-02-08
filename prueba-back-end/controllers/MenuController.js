var menuController = {};

menuController.menus = function(req, res) {
    //var fs = require('fs');
    //var obj = JSON.parse(fs.readFileSync('./menu.json', 'utf8'));
    res.json([{
            label: 'Home',
            icon: 'fa fa-home',
            url: '/',
            items: [{
                label: 'page 1',
                icon: 'fas fa-igloo',
                url: 'page1'
            }]
        },
        {
            label: 'Tools',
            icon: 'fa fa-tools',
            url: '/',
            items: [{
                    label: 'page 1',
                    icon: 'fa fa-screwdriver',
                    url: 'tools/page1'
                },
                {
                    label: 'page 2',
                    icon: 'fa fa-wrench',
                    url: 'tools/page2'
                },
                {
                    label: 'page 3',
                    icon: 'fa fa-hammer',
                    url: 'tools/page3'
                }
            ]
        }
    ]);
};

module.exports = menuController;