const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/product.routes')


dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.use('/api/products', productRoutes)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENv} mode on port ${PORT}...`))