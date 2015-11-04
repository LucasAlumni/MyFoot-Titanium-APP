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
    this.__controllerPath = "index";
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
    var __alloyId0 = [];
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1",
        title: "Tab 1"
    });
    $.__views.label1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        text: "I am Window 1 on android",
        id: "label1"
    });
    $.__views.win1.add($.__views.label1);
    $.__views.tab1 = Ti.UI.createTab({
        title: "toto android",
        window: $.__views.win1,
        id: "tab1"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2",
        title: "Tab 2"
    });
    $.__views.label2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        text: "I am Window 2",
        id: "label2"
    });
    $.__views.win2.add($.__views.label2);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.win2,
        id: "tab2",
        title: "Tab 2"
    });
    __alloyId0.push($.__views.tab2);
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3",
        title: "Tab 3"
    });
    $.__views.label3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        text: "I am Window 3",
        id: "label3"
    });
    $.__views.win3.add($.__views.label3);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.win3,
        id: "tab3",
        title: "Tab 3"
    });
    __alloyId0.push($.__views.tab3);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;