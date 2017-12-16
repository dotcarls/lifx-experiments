'use strict';
var blessed = require('blessed'),
	contrib = require('blessed-contrib');

class Page {
	constructor(screen) {
		this.screen = screen;
		this.grid = new contrib.grid({rows: 12, cols: 8, screen: screen});
		this.data = {};
		this.layout = undefined;
	}

	setLayout(layout) {
		this.layout = layout;
	}
}

module.exports = Page;
