const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/product.routes')
const {notFound, errorHandler} = require('./middleware/errorMiddleware')
const UserRoutes = require('./routes/user.routes')



dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Api is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', UserRoutes)


app.use(notFound)


app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENv} mode on port ${PORT}...`))