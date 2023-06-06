"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variableX = void 0;
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsers);
router.get('/:id', usuarios_1.getUser);
router.post('/', usuarios_1.postUser);
router.put('/:id', usuarios_1.updateUser);
router.delete('/:id', usuarios_1.deleteUser);
exports.variableX = 123;
exports.default = router;
//# sourceMappingURL=usuario.js.map