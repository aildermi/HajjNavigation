function create_poi_marker(type){	var options = {};	options.icon = L.icon({		iconType: type,		iconUrl: 'images/poi/' + type + '.png',		shadowUrl: 'images/shadow.png',		iconSize:     [25, 25], // size of the icon		shadowSize:   [33, 33], // size of the shadow		iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location		shadowAnchor: [13, 20],  // the same for the shadow		popupAnchor:  [0, -13] // point from which the popup should open relative to the iconAnchor	});	options.bounceOnAdd = true;	options.bounceOnAddOptions = 	{		duration: 500,		height: 50	};	return options;}