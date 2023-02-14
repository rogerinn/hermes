"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gRPC_adapter_1 = require("./application/config/adapters/gRPC-adapter");
var notes = [{ id: 1, title: "1", description: "a" }];
var handlers = ({
    List: function (_, callback) {
        return callback(null, { notes: notes });
    },
    Find: function (call, callback) {
        var _news = { note: { id: call.request.id, title: 'teste', description: 'teste' } };
        return callback(null, _news);
    }
});
var ProtoGrpcType;
var proto = gRPC_adapter_1.httpManager.loadproto("".concat(__dirname, "/../proto/notes.proto"), typeof ProtoGrpcType);
gRPC_adapter_1.httpManager.addService(proto.teste.Notes.service, handlers);
gRPC_adapter_1.httpManager.start();
//# sourceMappingURL=server2.js.map