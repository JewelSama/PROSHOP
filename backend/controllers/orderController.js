const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel')

//Create new prder
// @route POST /api/users/orders
//@access Private


const addOrderItems = asyncHandler(async(req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if(orderItems && orderItems.length === 0){
        res.status(400)
        throw new Error('No order items')
        return 
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
        const createdUser = await order.save()

        res.status(201).json(createdUser)
    }
})

module.exports = addOrderItems;