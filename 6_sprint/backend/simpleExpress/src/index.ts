import express, { NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import { productsRouter } from './routes/products-router'
import { addressesRouter } from './routes/addresses-router'

const app = express()
const port = process.env.PORT || 5000

const pareserMiddleware = bodyParser.json()
app.use(pareserMiddleware)

const blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
	// @ts-ignore
	req.blabla = 'Hello'
	next()
}

const authGuardMiddleware = (req: Request, res: Response, next: NextFunction) => {
	if (req.query.token === '123') {
		next()
	} else {
		res.send(401)
	}
}

let requestCounter = 0
const requestCounterMiddleware = (req: Request, res: Response, next: NextFunction) => {
	requestCounter++
	next()
}

app.use(blablaMiddleware)
app.use(requestCounterMiddleware)
app.use(authGuardMiddleware)

app.get('/product', blablaMiddleware, (req: Request, res: Response) => {
	//@ts-ignore
	const blabla = req.blabla
	res.send({ value: blabla + '!!!! ' + requestCounter })
})

app.get('/users', blablaMiddleware, (req: Request, res: Response) => {
	//@ts-ignore
	const blabla = req.blabla
	res.send({ value: blabla + ' from users!!!! ' + requestCounter })
})

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
