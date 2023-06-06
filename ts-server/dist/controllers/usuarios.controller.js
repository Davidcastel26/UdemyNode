"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = (req, res) => {
    res.json({
        msg: 'GetUusuarios'
    });
};
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUser',
        id
    });
};
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Post User',
        body
    });
};
const updateUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUser',
        body
    });
};
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'deleteUser',
        id
    });
};
module.exports = {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser
};
//# sourceMappingURL=usuarios.controller.js.map