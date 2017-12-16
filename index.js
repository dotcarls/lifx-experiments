var blessed = require('blessed'),
	contrib = require('blessed-contrib'),
	screen  = blessed.screen(),
	Main    = require('./pages/main.js'),
	Lifx 	= require('node-lifx').Client;
	lx 		= new Lifx(),
	color 	= require('color-convert');

var data = {};
data.lights = {};

var main = new Main(screen);

var carousel = new contrib.carousel([main.getLayout()], {
					screen: screen,
					controlKeys: true  //should right and left keyboard arrows control view rotation
               });

carousel.start();

function log(str) {
	main.log.log(str);
}

lx.init();
lx.on('light-new', (light) => {
	data.lights[light.id] = light;
	log("Found light!");
	light.getState((err, info) => {
		if (err)
			log(JSON.stringify(err));
		else
			data.lights[light.id].info = info;
		//console.log(info);
		data.lights[light.id].info.lastSeen = new Date();
		data.lights[light.id].info.rgb = color.hsl.rgb(info.color.hue, info.color.saturation, info.color.brightness);
		//console.log(data.lights[light.id].info.rgb);
		main.update(data);
		screen.render();
	});
});

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
	return process.exit(0);
});

screen.key(['r'], function(ch, key) {
	log("Refreshing data... ");
	return refreshData();
});

screen.key(['u'], function(ch, key) {
	log("Rerendering screen... ");
	return update();
});
