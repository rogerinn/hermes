"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gRPC_adapter_1 = require("../application/config/adapters/gRPC-adapter");
var proto = gRPC_adapter_1.httpManager.loadproto("".concat(__dirname, "../../../proto/notes.proto"));
var client = gRPC_adapter_1.httpManager.client('127.0.0.1', 50051, proto.teste.Notes);
client.List('', function (error, response) {
    if (error)
        throw error;
    console.log(response);
});
//# sourceMappingURL=client.js.map