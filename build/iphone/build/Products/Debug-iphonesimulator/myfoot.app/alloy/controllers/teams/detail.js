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
    this.__controllerPath = "teams/detail";
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
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#ffffff",
        titleColor: "#fff",
        translucent: "false",
        barColor: "#37373F",
        navTintColor: "#FFFFFF",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.__alloyId35 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId35"
    });
    $.__views.detail.add($.__views.__alloyId35);
    $.__views.name = Ti.UI.createLabel({
        id: "name"
    });
    $.__views.__alloyId35.add($.__views.name);
    $.__views.title_team = Ti.UI.createLabel({
        color: "#ecf0f1",
        id: "title_team"
    });
    $.__views.detail.titleControl = $.__views.title_team;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = args.team.stand_desc;
    $.title_team.text = args.team.stand_team_name;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;