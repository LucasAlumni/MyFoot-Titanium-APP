var args = arguments[0] || {};

$.name.text = args.team.stand_team_name;

$.position.text = args.team.stand_position;

$.row.addEventListener('click', function(e) {
	console.log('Vous avez cliqué le club', args.team);

	var detail = Alloy.createController('teams/detail', {team: args.team}).getView();
	args.tab.open(detail);
});

// $.name.addEventListener('click', function(e) {
// 	$.name.color = 'red';
// });