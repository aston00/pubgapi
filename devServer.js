/**
 * Created by rparaschak on 4/5/16.
 */

var http = require('http');
var Router  = require('router');
var serveStatic = require('serve-static');
var httpProxy = require("http-proxy");
var fs = require('fs');


//var finalhandler = require('finalhandler');

function Server(port, proxyUrl, proxyPort) {
    proxyUrl = 'https://api.pubgtracker.com';
    proxyPort = 443;
    var proxy = httpProxy.createProxyServer({secure: false, headers: {'Connection': 'keep-alive'}});
    var router = Router();


    router.get('/*', function(req, res, next){
        //if( req.url.indexOf('translations') == -1 )
          //  serveStatic('app')(req, res, next);
        //setTimeout(function(){
            serveStatic('.')(req, res, next);
        //}, 500);
    });

    //proxy
    router.all('/*', function(req, res, next){
        proxy.web(req, res, {target: proxyUrl + ':' + proxyPort || '80'}, function(e){
            console.log(e);
        });
    });

    proxy.on('error', function (err, req, res) {
        console.error(err);
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });
    });

    return http.createServer(function(req, res) {
        router(req, res, function(){}); //finalhandler(req, res)
    }).listen(port);
};

new Server(8080);