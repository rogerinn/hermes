"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hermes = void 0;
var controller_server_1 = require("./presentation/controller-server");
var Hermes = {
    addService: controller_server_1.hermes.addService,
    loadProto: controller_server_1.hermes.addService,
    start: controller_server_1.hermes.start,
    client: controller_server_1.hermes.client,
};
exports.Hermes = Hermes;
//# sourceMappingURL=index.js.map