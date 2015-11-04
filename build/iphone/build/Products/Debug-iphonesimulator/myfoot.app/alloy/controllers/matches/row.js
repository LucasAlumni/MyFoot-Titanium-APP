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
    this.__controllerPath = "matches/row";
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
    $.__views.row_match = Ti.UI.createTableViewRow({
        id: "row_match"
    });
    $.__views.row_match && $.addTopLevelView($.__views.row_match);
    $.__views.name_localteam = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "name_localteam"
    });
    $.__views.row_match.add($.__views.name_localteam);
    $.__views.versus = Ti.UI.createLabel({
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        height: 80,
        font: {
            fontSize: "30dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "versus",
        text: "VS"
    });
    $.__views.row_match.add($.__views.versus);
    $.__views.name_visitorteam = Ti.UI.createLabel({
        right: 10,
        font: {
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "name_visitorteam"
    });
    $.__views.row_match.add($.__views.name_visitorteam);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name_visitorteam.text = args.matche.match_visitorteam_name;
    $.name_localteam.text = args.matche.match_localteam_name;
    $.row_match.header = args.matche.match_formatted_date;
    $.row_match.addEventListener("click", function() {
        console.log("Vous avez cliqué le match", args.matche);
        var match_detail = Alloy.createController("matches/match_detail", {
            matche: args.matche
        }).getView();
        args.tab.open(match_detail);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;