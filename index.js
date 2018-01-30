var utils = require('loader-utils');
var cssWrap = require('css-wrap');

module.exports = function (source) {
	this.cacheable();

	var query = utils.parseQuery(this.query);

	fixSkipRegexOption(query);
	return cssWrap(source, query);
};

function fixSkipRegexOption(options) {
	if (options.skip) {
		options.skip = (options.skip instanceof RegExp) ? options.skip : new RegExp(options.skip);
	}
}