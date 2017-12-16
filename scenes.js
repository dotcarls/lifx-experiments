var blessed = require('blessed'),
	contrib = require('blessed-contrib');

var scenes = function(screen) {
	var grid = new contrib.grid({rows: 12, cols: 8, screen: screen});
}

module.exports = {page: scenes};
