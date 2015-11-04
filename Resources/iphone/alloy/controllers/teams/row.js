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
    this.__controllerPath = "teams/row";
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
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.name = Ti.UI.createLabel({
        left: 10,
        color: "#000",
        height: 80,
        font: {
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "name"
    });
    $.__views.row.add($.__views.name);
    $.__views.position = Ti.UI.createLabel({
        right: 10,
        color: "#000",
        font: {
            fontSize: "20dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "position"
    });
    $.__views.row.add($.__views.position);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = args.team.stand_team_name;
    $.position.text = args.team.stand_position;
    $.row.addEventListener("click", function() {
        console.log("Vous avez cliqué le club", args.team);
        var detail = Alloy.createController("teams/detail", {
            team: args.team
        }).getView();
        args.tab.open(detail);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;