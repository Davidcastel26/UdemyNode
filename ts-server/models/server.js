"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = require("express");
var usuario_1 = require("../routes/usuario");
var cors_1 = require("cors");
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //initial methods
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        //CORS
        this.app.use((0, cors_1.default)());
        // PARECE BODY
        this.app.use(express_1.default.json());
        // PUBLIC DIR
        this.app.use(express_1.default.static('public'));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPaths.users, usuario_1.default);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server running on port ".concat(_this.port));
        });
    };
    return Server;
}());
exports.Server = Server;
