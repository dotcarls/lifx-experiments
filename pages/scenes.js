var blessed = require('blessed'),
	contrib = require('blessed-contrib');

var scenes = function(screen) {
	var grid = new contrib.grid({rows: 12, cols: 8, screen: screen});
	var statusTable = grid.set(8, 0, 4, 4, contrib.table,
							{ keys: true,
							  fg: 'green',
							  selectedFg:'white',
							  selectedBg: 'blue',
							  interactive: true,
							  label: 'Lights',
							  columnWidth: [13, 4, 4]
							}
					    );
	statusTable.setData({
		headers: ['name', 'on/off', 'last seen'],
		data: [[1, 2, 3],
			   [4, 5, 6]]
		});
}

module.exports = {page: scenes};