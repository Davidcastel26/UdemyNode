"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'GetUusuarios'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Post User',
        body
    });
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUser',
        body
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id
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
//# sourceMappingURL=usuarios.js.map