var express = require('express');

var fs = require('fs');

var app = express();

module.exports = function(params) {

    app.get(params.route, function(req, res, next) {
        var template_data = fs.readFile(__dirname + '/../../public/' + 'index.html', 'utf8', function(err, data) {
            if (err) {
                throw err;
            } else {
                console.log(data);
                return data.replace(/<\!\-\-data_replace\-\-\>/g, JSON.stringify(params.data));
            }
        });

        res.set('Content-Type', 'text/html');
        res.send(template_data);

    });


    console.log(params);
};