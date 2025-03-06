"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/teste', (req, res) => {
    return res.send('ola dev');
});
router.get('/', (req, res) => {
    return res.send('ola principal');
});
router.post('/teste', (req, res) => {
    console.log(req.body);
    return res.send('testando psot');
});
exports.default = router;
