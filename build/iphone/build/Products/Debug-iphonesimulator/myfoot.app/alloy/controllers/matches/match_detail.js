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
    $.__views.scorevisitor = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        id: "scorevisitor"
    });
    $.__views.__alloyId7.add($.__views.scorevisitor);
    $.__views.scorelocal = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        id: "scorelocal"
    });
    $.__views.__alloyId7.add($.__views.scorelocal);
    var __alloyId8 = {};
    var __alloyId11 = [];
    var __alloyId12 = {
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
    __alloyId11.push(__alloyId12);
    var __alloyId13 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId14 = [];
            var __alloyId15 = {
                type: "Ti.UI.Label",
                bindId: "name",
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
                    bindId: "name"
                }
            };
            __alloyId14.push(__alloyId15);
            var __alloyId16 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId17 = [];
                    var __alloyId19 = {
                        type: "Ti.UI.Label",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#999",
                            font: {
                                fontSize: 10
                            },
                            text: "Joueur: "
                        }
                    };
                    __alloyId17.push(__alloyId19);
                    var __alloyId20 = {
                        type: "Ti.UI.Label",
                        bindId: "number",
                        properties: {
                            width: 30,
                            height: Ti.UI.SIZE,
                            color: "red",
                            font: {
                                fontSize: 10
                            },
                            bindId: "number"
                        }
                    };
                    __alloyId17.push(__alloyId20);
                    var __alloyId22 = {
                        type: "Ti.UI.Label",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "#999",
                            font: {
                                fontSize: 10
                            },
                            text: "Minutes: "
                        }
                    };
                    __alloyId17.push(__alloyId22);
                    var __alloyId23 = {
                        type: "Ti.UI.Label",
                        bindId: "mass",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "blue",
                            font: {
                                fontSize: 10
                            },
                            bindId: "mass"
                        }
                    };
                    __alloyId17.push(__alloyId23);
                    return __alloyId17;
                }(),
                properties: {
                    left: 0,
                    right: 0,
                    layout: "horizontal"
                }
            };
            __alloyId14.push(__alloyId16);
            return __alloyId14;
        }(),
        properties: {
            top: 0,
            left: 80,
            right: 0,
            bottom: 0,
            layout: "vertical"
        }
    };
    __alloyId11.push(__alloyId13);
    var __alloyId24 = {
        type: "Ti.UI.ImageView",
        bindId: "image",
        properties: {
            bindId: "image"
        }
    };
    __alloyId11.push(__alloyId24);
    var __alloyId10 = {
        properties: {
            name: "elementTemplate"
        },
        childTemplates: __alloyId11
    };
    __alloyId8["elementTemplate"] = __alloyId10;
    $.__views.__alloyId28 = Ti.UI.createView({
        backgroundColor: "#DDD",
        height: Ti.UI.SIZE,
        id: "__alloyId28"
    });
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        text: "Actions du match",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    var __alloyId30 = [];
    $.__views.__alloyId31 = {
        symbol: {
            text: "H",
            color: "#090"
        },
        name: {
            text: "But"
        },
        number: {
            text: "35MN"
        },
        mass: {
            text: "Tocardinoh"
        },
        properties: {
            id: "__alloyId31"
        }
    };
    __alloyId30.push($.__views.__alloyId31);
    $.__views.__alloyId32 = {
        symbol: {
            text: "He",
            color: "#090"
        },
        name: {
            text: "Carton Jaune"
        },
        number: {
            text: "50MN"
        },
        mass: {
            text: "Messi c'estpossible"
        },
        properties: {
            id: "__alloyId32"
        }
    };
    __alloyId30.push($.__views.__alloyId32);
    $.__views.__alloyId33 = {
        symbol: {
            text: "Li"
        },
        name: {
            text: "Penalti"
        },
        number: {
            text: "90mn"
        },
        mass: {
            text: "MARCEL LE THON"
        },
        properties: {
            id: "__alloyId33"
        }
    };
    __alloyId30.push($.__views.__alloyId33);
    $.__views.__alloyId25 = Ti.UI.createListSection({
        headerView: $.__views.__alloyId28,
        id: "__alloyId25"
    });
    $.__views.__alloyId25.items = __alloyId30;
    var __alloyId34 = [];
    __alloyId34.push($.__views.__alloyId25);
    $.__views.elementsList = Ti.UI.createListView({
        sections: __alloyId34,
        templates: __alloyId8,
        id: "elementsList",
        defaultItemTemplate: "elementTemplate"
    });
    $.__views.__alloyId7.add($.__views.elementsList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.scorevisitor.text = args.matche.match_visitorteam_score;
    $.scorelocal.text = args.matche.match_localteam_score;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;