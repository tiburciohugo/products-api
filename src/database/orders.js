const { ObjectId } = require("mongodb");
const { orders } = require("./db");

const getAllOrders = async () => {
    return await orders.find({}).toArray();
};

const getOrderByReference = async (ref) => {
    return await orders.findOne({ ref });
};

const createOrder = async (order) => {
    const result = await orders.insertOne(order);
    return { ...order, _id: result.insertedId };
};

const updateOrder = async (id, order) => {
    return await orders.updateOne({ _id: new ObjectId(id) }, { $set: order });
};

const deleteOrder = async (id) => {
    return await orders.deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
    getAllOrders,
    getOrderByReference,
    createOrder,
    updateOrder,
    deleteOrder
};
