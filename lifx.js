var lifx = require('node-lifx').Client;

var lx = new lifx();
lx.init();

lx.on('light-new', function(light) {
	/*log.log('New light found.');
	log.log('ID: ' + light.id);
	log.log('IP: ' + light.address + ':' + light.port);
	light.getState(function(err, info) {
		if (err) {
			log.log(err);
		}
		log.log(JSON.stringify(info));
		console.log(info);
	});
	data.lights[light.id] = light;
	*/
});

var data = {};
data.lights = {};

function refreshData() {

};

function update() {
	screen.render();
}

function turnAllLightsOn() {
	Object.keys(data.lights).forEach(function(light) {
		data.lights[light].on(0, function(err) {
			if (err)
				log.log(JSON.stringify(err));
		});
	});
}
