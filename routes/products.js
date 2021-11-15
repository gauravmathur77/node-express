const express = require('express'),
    jwtMiddleware = require('../middleware/jwtAuthentication'),
    roles = require('../constants/roles.json'),
    products = require("../controllers/ProductsController");
var router = express.Router();


router.get("/", jwtMiddleware(roles.USER,roles.ADMIN), products.findAll)

router.get("/:id", jwtMiddleware(roles.USER,roles.ADMIN), products.findOne)

router.delete("/:id", jwtMiddleware(roles.ADMIN), products.delete)

router.post("/", jwtMiddleware(roles.ADMIN), products.createProduct)

router.put("/:id", jwtMiddleware(roles.ADMIN), products.updateAccount)

module.exports = router;


