const path = require('path');
const fs = require('fs');

module.exports = (app) => {
	fs.readdirSync('file/api/').forEach((file) => {
		require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
	})
}