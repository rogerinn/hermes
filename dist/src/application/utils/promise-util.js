"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promy = void 0;
var promy = function (client) {
    var _loop_1 = function (method) {
        client["".concat(method, "Async")] = function (parameters) {
            return new Promise(function (resolve, reject) {
                client[method](parameters, function (err, response) {
                    if (err)
                        reject(err);
                    resolve(response);
                });
            });
        };
    };
    for (var method in client) {
        _loop_1(method);
    }
};
exports.promy = promy;
//# sourceMappingURL=promise-util.js.map