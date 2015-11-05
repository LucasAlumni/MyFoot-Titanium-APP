var args = arguments[0] || {};

$.scoreVisitor.text = args.matche.match_visitorteam_score;
$.nameVisitor.text = args.matche.match_visitorteam_name;

$.scoreLocal.text = args.matche.match_localteam_score;
$.nameLocal.text = args.matche.match_localteam_name;

var events = args.matche.match_events;

var data = [];

_.each(events, function(element) { 
    data.push({
        symbol : { text: element.event_minute },
        eventType : { text : element.event_type },
        player : { text : element.event_player },
        properties : {
            eventId: element.event_id,
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE,
        }
    });
});

console.log(data);

$.elementsList.sections[0].setItems(data);