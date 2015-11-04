function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function ConnectAPI(url, method, params, callback) {
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                var data = JSON.parse(this.responseText);
                callback(data);
                console.log(data);
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5e3
        });
        client.open(method, Alloy.CFG.apiServer + url);
        client.send(params);
    }
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
        backgroundColor: "#fff",
        titleColor: "#fff",
        translucent: "false",
        barColor: "#37373F",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "win1"
    });
    $.__views.tableNews = Ti.UI.createTableView({
        id: "tableNews"
    });
    $.__views.win1.add($.__views.tableNews);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ecf0f1",
        text: "Actualité",
        id: "__alloyId2"
    });
    $.__views.win1.titleControl = $.__views.__alloyId2;
    $.__views.tab1 = Ti.UI.createTab({
        title: "Actualité",
        color: "#fff",
        icon: "",
        window: $.__views.win1,
        id: "tab1"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        titleColor: "#fff",
        translucent: "false",
        barColor: "#37373F",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "win2"
    });
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.win2.add($.__views.table);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ecf0f1",
        text: "Classement",
        id: "__alloyId4"
    });
    $.__views.win2.titleControl = $.__views.__alloyId4;
    $.__views.tab2 = Ti.UI.createTab({
        title: "Classement",
        color: "#fff",
        window: $.__views.win2,
        id: "tab2"
    });
    __alloyId0.push($.__views.tab2);
    $.__views.win3 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        titleColor: "#fff",
        translucent: "false",
        barColor: "#37373F",
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        id: "win3"
    });
    $.__views.label3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#333",
        text: "Pas de match aujourd'hui.",
        id: "label3"
    });
    $.__views.win3.add($.__views.label3);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#ecf0f1",
        text: "Live Match",
        id: "__alloyId6"
    });
    $.__views.win3.titleControl = $.__views.__alloyId6;
    $.__views.tab3 = Ti.UI.createTab({
        title: "Live Match",
        color: "#fff",
        window: $.__views.win3,
        id: "tab3"
    });
    __alloyId0.push($.__views.tab3);
    $.__views.index = Ti.UI.createTabGroup({
        tabsBackgroundColor: "#37373F",
        tabs: __alloyId0,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var displayTeams = function(data) {
        var teams = data["teams"];
        var data = [];
        _.each(teams, function(team) {
            var row = Alloy.createController("teams/row", {
                team: team,
                tab: $.tab2
            });
            data.push(row.getView());
        });
        $.table.setData(data);
    };
    var displayMatches = function(data) {
        var matches = data["matches"];
        var data = [];
        _.each(matches, function(matche) {
            var row = Alloy.createController("matches/row", {
                matche: matche,
                tab: $.tab1
            });
            data.push(row.getView());
        });
        $.tableNews.setData(data);
    };
    ConnectAPI(Alloy.CFG.api.teamList, "GET", null, displayTeams);
    ConnectAPI(Alloy.CFG.api.news, "GET", null, displayMatches);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;