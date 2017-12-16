'use strict';
var blessed = require('blessed');
var contrib = require('blessed-contrib');

function HSLtoRGB(color) {
	var hue = color.hue;
	var saturation = color.saturation;
	var brightness = color.brightness;
	var kelvin = color.kelvin;
}


class Main {
	constructor(screen) {
		this.screen = screen;
		this.grid = new contrib.grid({rows: 12, cols: 8, screen: screen});
		this.data = {};
		this.tableArray = [];
	}

	update(data) {
		this.data = data;
		this.processData()();
		this.setData()();
		this.screen.render();
	}

	processData() {
		return () => {
			this.tableArray = [];
			if (Object.keys(this.data).length > 0) {
				var now = new Date();
				Object.keys(this.data.lights).forEach((key) => {
					var light = this.data.lights[key];
					var elapsed = 0;
					if (light.info)
						elapsed = (now - light.info.lastSeen)/1000;
					var arr = [String(light.label), String(light.status), String(elapsed)];
					this.tableArray.push(arr);
				});
			}
			this.getLayout();
		}
	}
	
	setData() {
		return () => {
			this.statusTable.setData({
				headers: ['name', 'on/off', 'last seen'],
				data: this.tableArray
			});
		}
	}

	getLayout() {
		return () => {
			this.log = this.grid.set(8, 0, 4, 8, contrib.log, {
				fg: "green",
				selectedFg: "green",
				label: "Status"
			});

			this.statusTable = this.grid.set(4, 0, 4, 8, contrib.table, {
				keys: true,
				fg: 'green',
				selectedFg:'white',
				selectedBg: 'blue',
				interactive: false,
				label: 'Lights',
				columnWidth: [13, 4, 4]
			});
		}
	}
}

module.exports = Main;
