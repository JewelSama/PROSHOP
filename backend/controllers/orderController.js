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

//Get Order By id
//A\@ GET /api/orders/:id
//Privare

const getOrderById = asyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
    
    if(order){
        res.json(order)
    }else {
        res.status(404)
        throw new Error('Order not found')
    }
})

module.exports = {addOrderItems, getOrderById}