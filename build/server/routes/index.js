"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.send('Bem-vindo');
});
router.get('/cidades', controllers_1.CidadeController.getAllValidation, controllers_1.CidadeController.getAll);
router.get('/cidades/:id', controllers_1.CidadeController.getByIdValidation, controllers_1.CidadeController.getById);
router.post('/cidades', controllers_1.CidadeController.createValidation, controllers_1.CidadeController.create);
router.put('/cidades/:id', controllers_1.CidadeController.updateByIdValidation, controllers_1.CidadeController.updateById);
router.get('/cidades/:id', controllers_1.CidadeController.deleteByIdValidation, controllers_1.CidadeController.deleteById);
exports.default = router;
