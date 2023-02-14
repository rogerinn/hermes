"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grpc_1 = require("grpc");
var gRPC_adapter_1 = require("./application/config/adapters/gRPC-adapter");
gRPC_adapter_1.httpManager.client('127.0.0.1', '50051', grpc_1.credentials.createInsecure());
//# sourceMappingURL=client.js.map