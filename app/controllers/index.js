

function ConnectAPI(url, method, params, callback){
    var client = Ti.Network.createHTTPClient({
         // function called when the response data is available
         onload : function(e) {
	         // Ti.API.info("Received text: " + this.responseText);
	         var data = JSON.parse(this.responseText);
	         callback(data);
	         console.log(data);
    	},
    	// function called when an error occurs, including a timeout
    	onerror : function(e) {
	        Ti.API.debug(e.error);
	        alert('error');
    	},
    	timeout : 5000  // in milliseconds
	});
	
	// Prepare the connection.
	client.open(method, Alloy.CFG.apiServer + url);
	
	// Send the request.
	client.send(params);
}

var displayTeams = function(data) {
	var teams = data['teams'];
	var data = [];

	_.each(teams, function(team) {
		var row = Alloy.createController('teams/row', {
			team: team,
			tab: $.tab2
		});
		data.push(row.getView());
	});

	$.table.setData(data);
}

var displayMatches = function(data) {
	var matches = data['matches'];
	var data = [];

	_.each(matches, function(matche) {
		var row = Alloy.createController('matches/row', {
			matche: matche,
			tab: $.tab1
		});
		data.push(row.getView());
	});

	$.tableNews.setData(data);

}

ConnectAPI(Alloy.CFG.api.teamList, 'GET', null, displayTeams);
ConnectAPI(Alloy.CFG.api.news, 'GET', null, displayMatches);
	

	



$.index.open();