"use strict";
var path = require('path');
var express = require('express');
var connect = require('connect');
var http = require('http');
var NodeCache = require("node-cache");
var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : 3000;
var app = express();
app.use(connect.compress());
app.set('view cache', true);
app.use('/build', express.static(__dirname + '/build'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
var myCache = new NodeCache({ stdTTL: 60, checkperiod: 60 });
function getJobs() {
    http.get("http://blog.slamby.com/wp-json/wp/v2/posts?categories=265", function (res) {
        var body = '';
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
            myCache.set("jobs", body, function (err, success) {
                if (!err && success) {
                    console.log(success);
                }
            });
        });
    }).on('error', function (e) {
        console.log("Got an error: ", e);
    });
}
;
getJobs();
myCache.on("expired", function (key, value) {
    console.log("Jobs Expired");
    getJobs();
});
app.get('/api/jobservice', function (req, response) {
    myCache.get("jobs", function (err, value) {
        if (!err) {
            if (value == undefined) {
                console.log("undifined");
            }
            else {
                response.send(value);
            }
        }
    });
});
app.get('/api/jobservice/:id*', function (req, response) {
    var id = req.params.id;
    var result = false;
    myCache.get("jobs", function (err, value) {
        if (!err) {
            var object = JSON.parse(value);
            object.forEach(function (element) {
                if (element.id == id) {
                    result = true;
                    response.send(JSON.stringify(element));
                }
                ;
            });
        }
    });
    if (!result) {
        response.send("404");
    }
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
