"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_1 = require("grpc");
var proto_loader_1 = require("@grpc/proto-loader");
var PROTO_PATH = "".concat(__dirname, "/../proto/notes.proto");
;
var packageDefinition = (0, proto_loader_1.loadSync)(PROTO_PATH);
var proto = (0, grpc_1.loadPackageDefinition)(packageDefinition);
var server = new grpc_1.Server();
var notes = [{ id: 1, title: "1", description: "a" }];
var handlers = ({
    List: function (_, callback) {
        return callback(null, { notes: notes });
    },
    Find: function (call, callback) {
        var _news = { note: { id: call.request.id, title: 'teste', description: 'teste' } };
        callback(null, _news);
    }
});
var routers = { Find: handlers.Find, List: handlers.List };
server.addService(proto.teste.Notes.service, routers);
server.bind("127.0.0.1:50051", grpc_1.ServerCredentials.createInsecure());
server.start();
console.log('Running server');
//# sourceMappingURL=server.js.map