'use strict';
var blessed = require('blessed');
var contrib = require('blessed-contrib');

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

			this.getLayout();
		}
	}
	
	setData() {
		return () => {

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
