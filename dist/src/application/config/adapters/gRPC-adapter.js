"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpManager = void 0;
var protocols_1 = require("../protocols");
exports.httpManager = {
    _server: new protocols_1.Server(),
    _client: null,
    loadproto: function (path, args) {
        var PROTO_PATH = "".concat(path);
        var packageDefinition = (0, protocols_1.loadSync)(PROTO_PATH);
        var proto = (0, protocols_1.loadPackageDefinition)(packageDefinition);
        return proto;
    },
    handlers: function (handler) {
        handler;
    },
    addService: function (proto, handlers) {
        exports.httpManager._server.addService(proto, handlers);
    },
    start: function (port) {
        exports.httpManager._server.bind("127.0.0.1:".concat(port || 50051), protocols_1.ServerCredentials.createInsecure()),
            exports.httpManager._server.start(),
            console.log('Running server');
    },
    client: function (ip, port, proto) {
        var client = new proto("".concat(ip, ":").concat(port));
        client.ChannelCredentials.createInsecure();
        exports.httpManager._client = client;
    }
};
//# sourceMappingURL=gRPC-adapter.js.map