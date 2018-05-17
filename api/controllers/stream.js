const StreamController = function() {};
var Stream = require('node-rtsp-stream');

StreamController.newStream = function (name, streamUrl, port) {
    return new Stream({
        name : name,
        streamUrl : streamUrl,
        wsPort : port
    })
}
