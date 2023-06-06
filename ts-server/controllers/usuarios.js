"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
var getUsers = function (req, res) {
    res.json({
        msg: 'GetUusuarios'
    });
};
exports.getUsers = getUsers;
var getUser = function (req, res) {
    var id = req.params.id;
    res.json({
        msg: 'getUser',
        id: id
    });
};
exports.getUser = getUser;
var postUser = function (req, res) {
    var body = req.body;
    res.json({
        msg: 'Post User',
        body: body
    });
};
exports.postUser = postUser;
var updateUser = function (req, res) {
    var id = req.params.id;
    var body = req.body;
    res.json({
        msg: 'putUser',
        body: body
    });
};
exports.updateUser = updateUser;
var deleteUser = function (req, res) {
    var id = req.params.id;
    res.json({
        msg: 'deleteUser',
        id: id
    });
};
exports.deleteUser = deleteUser;
// module.exports = {
//     getUsers,
//     getUser,
//     postUser,
//     updateUser,
//     deleteUser
// }
