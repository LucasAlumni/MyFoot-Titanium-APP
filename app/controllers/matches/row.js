var args = arguments[0] || {};

$.name_visitorteam.text = args.matche.match_visitorteam_name;

$.name_localteam.text = args.matche.match_localteam_name;

$.row_match.header = args.matche.match_formatted_date;

$.row_match.addEventListener('click', function(e) {
	console.log('Vous avez cliqué le match', args.matche);

	var match_detail = Alloy.createController('matches/match_detail', {matche: args.matche}).getView();
	args.tab.open(match_detail);
});