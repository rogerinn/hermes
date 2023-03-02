"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var presentation_1 = require("../presentation");
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
var proto = presentation_1.hermes.loadProto("".concat(__dirname, "../../../proto/notes.proto"));
presentation_1.hermes.addService(proto.teste.Notes.service, handlers);
presentation_1.hermes.start();
//# sourceMappingURL=server.js.map