const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../database/products");

router.get("/", async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).send({ status: "OK", data: products });
    } catch (error) {
        res.status(401).send({ status: "FAILED", message: error.message });
    } finally {
        res.end();
    }
});

router.get("/:productId", async (req, res) => {
    try {
        const product = await getProductById(req.params.productId);

        if (!product) {
            res.status(404).send({
                status: "FAILED",
                message: "Product not found"
            });
            return;
        }

        res.status(200).send({ status: "OK", data: product });
    } catch (error) {
        res.status(401).send({ status: "FAILED", message: error.message });
    } finally {
        res.end();
    }
});

module.exports = router;
