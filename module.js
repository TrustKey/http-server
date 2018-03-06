const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = function setup(options, imports, register) {
    console.log("tk-http-server module setup");

    const server = app.listen( options.port || 3000, function(){
        console.log('Http server listening on port ' + server.address().port);
    });

    register(null, {
        http_server: {
            app: app,
            server: server,
        }
    });
};