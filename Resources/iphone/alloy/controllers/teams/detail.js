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
    $.__views.__alloyId36 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId36"
    });
    $.__views.detail.add($.__views.__alloyId36);
    $.__views.form_team = Ti.UI.createView({
        height: 40,
        layout: "horizontal",
        id: "form_team"
    });
    $.__views.__alloyId36.add($.__views.form_team);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        text: "Recent Form :",
        id: "__alloyId37"
    });
    $.__views.form_team.add($.__views.__alloyId37);
    $.__views.name = Ti.UI.createLabel({
        color: "green",
        left: 25,
        font: {
            fontSize: "32dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "name"
    });
    $.__views.form_team.add($.__views.name);
    $.__views.day_team = Ti.UI.createView({
        height: 40,
        layout: "horizontal",
        id: "day_team"
    });
    $.__views.__alloyId36.add($.__views.day_team);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        text: "Journée du Championnat :",
        id: "__alloyId38"
    });
    $.__views.day_team.add($.__views.__alloyId38);
    $.__views.day = Ti.UI.createLabel({
        id: "day"
    });
    $.__views.day_team.add($.__views.day);
    $.__views.point_team = Ti.UI.createView({
        height: 40,
        layout: "horizontal",
        id: "point_team"
    });
    $.__views.__alloyId36.add($.__views.point_team);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "Nombre de points :",
        id: "__alloyId39"
    });
    $.__views.point_team.add($.__views.__alloyId39);
    $.__views.number = Ti.UI.createLabel({
        id: "number"
    });
    $.__views.point_team.add($.__views.number);
    $.__views.country_team = Ti.UI.createView({
        height: 40,
        layout: "horizontal",
        id: "country_team"
    });
    $.__views.__alloyId36.add($.__views.country_team);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        text: "Pays :",
        id: "__alloyId40"
    });
    $.__views.country_team.add($.__views.__alloyId40);
    $.__views.country = Ti.UI.createLabel({
        id: "country"
    });
    $.__views.country_team.add($.__views.country);
    $.__views.promo_team = Ti.UI.createView({
        height: 40,
        layout: "horizontal",
        id: "promo_team"
    });
    $.__views.__alloyId36.add($.__views.promo_team);
    $.__views.promo = Ti.UI.createLabel({
        id: "promo"
    });
    $.__views.promo_team.add($.__views.promo);
    $.__views.title_team = Ti.UI.createLabel({
        color: "#ecf0f1",
        id: "title_team"
    });
    $.__views.detail.titleControl = $.__views.title_team;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = args.team.stand_recent_form;
    $.number.text = args.team.stand_points;
    $.day.text = args.team.stand_round;
    $.promo.text = args.team.stand_desc;
    $.country.text = args.team.stand_country;
    $.title_team.text = args.team.stand_team_name;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;