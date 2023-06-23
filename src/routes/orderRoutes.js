const express = require("express");
const { createOrder, getOrderByReference } = require("../database/orders");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.send({ status: "OK", data: orders });
    } catch (error) {
        res.send({ status: "FAILED", message: error.message });
    } finally {
        res.end();
    }
});

router.get("/:reference", async (req, res) => {
    try {
        const order = await getOrderByReference(req.params.reference);

        if (!order) {
            res.status(404).send({
                status: "FAILED",
                message: "Order not found"
            });
            return;
        }
        res.send({ status: "OK", data: order });
    } catch (error) {
        res.send({ status: "FAILED", message: error.message });
    } finally {
        res.end();
    }
});

router.post("/", async (req, res) => {
    try {
        const orderData = req.body;

        orderData.ref = (Math.random() + 1).toString(36).substring(7);

        const newOrder = await createOrder(orderData);

        res.status(201).send({ status: "OK", data: newOrder });
    } catch (error) {
        res.send({ status: "FAILED", message: error.message });
    } finally {
        res.end();
    }
});

module.exports = router;
