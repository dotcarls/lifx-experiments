var Page = require('./Page.js');
var blessed = require('blessed');
var contrib = require('blessed-contrib');

var log = {	identifier: "log", 
			body: this.grid.set(8, 0, 4, 8, contrib.log, 
						  { fg: "green",
							selectedFg: "green",
							label: "Status"
						  }
					  )
		  };

}

var Main = new Page(screen);

Main.registerComponent(log);

module.exports = Main;