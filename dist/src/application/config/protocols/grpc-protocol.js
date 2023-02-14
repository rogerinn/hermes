"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSync = exports.Client = exports.ServerCredentials = exports.Server = exports.loadPackageDefinition = void 0;
var grpc_1 = require("grpc");
Object.defineProperty(exports, "loadPackageDefinition", { enumerable: true, get: function () { return grpc_1.loadPackageDefinition; } });
Object.defineProperty(exports, "Server", { enumerable: true, get: function () { return grpc_1.Server; } });
Object.defineProperty(exports, "ServerCredentials", { enumerable: true, get: function () { return grpc_1.ServerCredentials; } });
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return grpc_1.Client; } });
var proto_loader_1 = require("@grpc/proto-loader");
Object.defineProperty(exports, "loadSync", { enumerable: true, get: function () { return proto_loader_1.loadSync; } });
//# sourceMappingURL=grpc-protocol.js.map