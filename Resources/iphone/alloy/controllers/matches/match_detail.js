function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "matches/match_detail";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.match_detail = Ti.UI.createWindow({
        backgroundColor: "white",
        titleColor: "#fff",
        translucent: "false",
        barColor: "#37373F",
        navTintColor: "#FFFFFF",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "match_detail"
    });
    $.__views.match_detail && $.addTopLevelView($.__views.match_detail);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId7"
    });
    $.__views.match_detail.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        text: "Résultat du match",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.test = Ti.UI.createView({
        height: 40,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "test",
        layout: "horizontal"
    });
    $.__views.__alloyId7.add($.__views.test);
    $.__views.scoreLocal = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        left: 30,
        font: {
            fontSize: 34,
            fontWeight: "bold"
        },
        id: "scoreLocal"
    });
    $.__views.test.add($.__views.scoreLocal);
    $.__views.scoreVisitor = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        left: 230,
        font: {
            fontSize: 34,
            fontWeight: "bold"
        },
        id: "scoreVisitor"
    });
    $.__views.test.add($.__views.scoreVisitor);
    $.__views.test1 = Ti.UI.createView({
        height: 20,
        id: "test1",
        layout: "horizontal"
    });
    $.__views.__alloyId7.add($.__views.test1);
    $.__views.nameLocal = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        left: 20,
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "nameLocal"
    });
    $.__views.test1.add($.__views.nameLocal);
    $.__views.nameVisitor = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        left: 150,
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "nameVisitor"
    });
    $.__views.test1.add($.__views.nameVisitor);
    var __alloyId9 = {};
    var __alloyId12 = [];
    var __alloyId13 = {
        type: "Ti.UI.Label",
        bindId: "symbol",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "black",
            left: 15,
            font: {
                fontSize: 34,
                fontWeight: "bold"
            },
            bindId: "symbol"
        }
    };
    __alloyId12.push(__alloyId13);
    var __alloyId14 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId15 = [];
            var __alloyId16 = {
                type: "Ti.UI.Label",
                bindId: "eventType",
                properties: {
                    width: Ti.UI.SIZE,
                    height: Ti.UI.SIZE,
                    color: "black",
                    left: 0,
                    top: 4,
                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                    font: {
                        fontSize: 16
                    },
                    bindId: "eventType"
                }
            };
            __alloyId15.push(__alloyId16);
            var __alloyId17 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId18 = [];
                    var __alloyId20 = {
                        type: "Ti.UI.Label",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#999",
                            font: {
                                fontSize: 10
                            },
                            text: "Joueur : "
                        }
                    };
                    __alloyId18.push(__alloyId20);
                    var __alloyId21 = {
                        type: "Ti.UI.Label",
                        bindId: "player",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "blue",
                            font: {
                                fontSize: 10
                            },
                            bindId: "player"
                        }
                    };
                    __alloyId18.push(__alloyId21);
                    return __alloyId18;
                }(),
                properties: {
                    left: 0,
                    right: 0,
                    layout: "horizontal"
                }
            };
            __alloyId15.push(__alloyId17);
            return __alloyId15;
        }(),
        properties: {
            top: 0,
            left: 80,
            right: 0,
            bottom: 0,
            layout: "vertical"
        }
    };
    __alloyId12.push(__alloyId14);
    var __alloyId11 = {
        properties: {
            name: "elementTemplate"
        },
        childTemplates: __alloyId12
    };
    __alloyId9["elementTemplate"] = __alloyId11;
    $.__views.__alloyId25 = Ti.UI.createView({
        backgroundColor: "#DDD",
        height: Ti.UI.SIZE,
        id: "__alloyId25"
    });
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        text: "Actions du match",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    var __alloyId27 = [];
    $.__views.__alloyId28 = {
        symbol: {
            text: "30'"
        },
        eventType: {
            text: "BUT"
        },
        player: {
            text: "Coucou c'est Jacki"
        },
        properties: {
            id: "__alloyId28"
        }
    };
    __alloyId27.push($.__views.__alloyId28);
    $.__views.__alloyId29 = {
        symbol: {
            text: "30'"
        },
        eventType: {
            text: "BUT"
        },
        player: {
            text: "Coucou c'est Jacki"
        },
        properties: {
            id: "__alloyId29"
        }
    };
    __alloyId27.push($.__views.__alloyId29);
    $.__views.__alloyId30 = {
        symbol: {
            text: "30'"
        },
        eventType: {
            text: "BUT"
        },
        player: {
            text: "Coucou c'est Jacki"
        },
        properties: {
            id: "__alloyId30"
        }
    };
    __alloyId27.push($.__views.__alloyId30);
    $.__views.__alloyId31 = {
        symbol: {
            text: "30'"
        },
        eventType: {
            text: "BUT"
        },
        player: {
            text: "Coucou c'est Jacki"
        },
        properties: {
            id: "__alloyId31"
        }
    };
    __alloyId27.push($.__views.__alloyId31);
    $.__views.__alloyId32 = {
        symbol: {
            text: "30'"
        },
        eventType: {
            text: "BUT"
        },
        player: {
            text: "Coucou c'est Jacki"
        },
        properties: {
            id: "__alloyId32"
        }
    };
    __alloyId27.push($.__views.__alloyId32);
    $.__views.__alloyId33 = {
        symbol: {
            text: "30'"
        },
        eventType: {
            text: "BUT"
        },
        player: {
            text: "Coucou c'est Jacki"
        },
        properties: {
            id: "__alloyId33"
        }
    };
    __alloyId27.push($.__views.__alloyId33);
    $.__views.__alloyId34 = {
        symbol: {
            text: "30'"
        },
        eventType: {
            text: "BUT"
        },
        player: {
            text: "Coucou c'est Jacki"
        },
        properties: {
            id: "__alloyId34"
        }
    };
    __alloyId27.push($.__views.__alloyId34);
    $.__views.__alloyId22 = Ti.UI.createListSection({
        headerView: $.__views.__alloyId25,
        id: "__alloyId22"
    });
    $.__views.__alloyId22.items = __alloyId27;
    var __alloyId35 = [];
    __alloyId35.push($.__views.__alloyId22);
    $.__views.elementsList = Ti.UI.createListView({
        sections: __alloyId35,
        templates: __alloyId9,
        id: "elementsList",
        defaultItemTemplate: "elementTemplate"
    });
    $.__views.__alloyId7.add($.__views.elementsList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.scoreVisitor.text = args.matche.match_visitorteam_score;
    $.nameVisitor.text = args.matche.match_visitorteam_name;
    $.scoreLocal.text = args.matche.match_localteam_score;
    $.nameLocal.text = args.matche.match_localteam_name;
    var events = args.matche.match_events;
    console.log(events);
    var data = [];
    _.each(events, function(element) {
        data.push({
            symbol: {
                text: element.event_minute
            },
            eventType: {
                text: element.event_type
            },
            player: {
                text: element.event_player
            },
            properties: {
                eventId: element.event_id,
                accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE
            }
        });
    });
    console.log(data);
    $.elementsList.sections[0].setItems(data);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;