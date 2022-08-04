const express = require('express')
const dotenv = require('dotenv')
const path = require('path');
const connectDB = require('./config/db')
const productRoutes = require('./routes/product.routes')
const {notFound, errorHandler} = require('./middleware/errorMiddleware')
const UserRoutes = require('./routes/user.routes')
const orderRoutes = require('./routes/order.routes')
const uploadRouter = require('./routes/uploads.routes')
const morgan = require('morgan')

dotenv.config()

connectDB()
const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}


app.use(express.json())



app.use('/api/products', productRoutes)
app.use('/api/users', UserRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRouter)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
    )
    
} else {
    app.get('/', (req, res) => {
        res.send('Api is running...')
    })
}



app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.use(notFound)


app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENv} mode on port ${PORT}...`))