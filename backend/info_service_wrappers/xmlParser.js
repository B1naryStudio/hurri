var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
parser.addListener('end', function(result) {
    console.dir(result);
    console.log('Done.');
});
fs.readFile('http://www.billboard.com/rss/charts/hot-100', function(err, data) {
    parser.parseString(data);
});
module.exports = new xmlParser();