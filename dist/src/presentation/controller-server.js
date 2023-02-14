"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hermes = void 0;
var gRPC_adapter_1 = require("../application/config/adapters/gRPC-adapter");
exports.hermes = ({
    loadProto: gRPC_adapter_1.httpManager.loadproto,
    handlers: gRPC_adapter_1.httpManager.handlers,
    addService: gRPC_adapter_1.httpManager.addService,
    start: gRPC_adapter_1.httpManager.start,
    client: gRPC_adapter_1.httpManager.client
});
//# sourceMappingURL=controller-server.js.map