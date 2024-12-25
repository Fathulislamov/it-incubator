import { Router, Request, Response } from "express";
import { productsRepositories } from "../repositories/products-repositories";


export const productsRouter = Router()

productsRouter.get('/', (req: Request, res: Response) => {
	const foundProducts = productsRepositories.findProduct(req.query.title?.toString())
	res.send(foundProducts)
})


productsRouter.get('/:productTitle', (req: Request, res: Response) => {
	const foundProducts = productsRepositories.findProduct(req.query.title?.toString())
	if (foundProducts) {
		res.send(foundProducts)

	} else res.send(404)
})

productsRouter.delete('/:id', (req: Request, res: Response) => {
	const isDeleted = productsRepositories.deleteProduct(+req.params.id)
	isDeleted ? res.send(204) : res.send(404)
})

productsRouter.post('/', (req: Request, res: Response) => {
	const newProduct = productsRepositories.createProduct(req.body.title)
	res.status(201).send(newProduct)
})

productsRouter.put('/:id', (req: Request, res: Response) => {
	const isUpdated = productsRepositories.updateProduct(+req.params.id, req.body.title)
	if (isUpdated) {
		const product = productsRepositories.getProductById(+req.params.id)
		res.send(product)
	} else res.send(404)

})
