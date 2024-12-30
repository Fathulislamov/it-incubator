import express from 'express'
import bodyParser from 'body-parser'
import { productsRouter } from './routes/products-router'
import { runDB } from './repositories/db'

const app = express()
const port = process.env.PORT || 5000

const jsonBodyMiddleware = bodyParser.json()

app.use(jsonBodyMiddleware)


app.get('/products', productsRouter)

const startApp = async () => {
	await runDB()
	app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

startApp()
