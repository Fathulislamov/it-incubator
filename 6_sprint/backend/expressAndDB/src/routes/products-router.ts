import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { productsRepositories, ProductType } from "../repositories/products-db-repositories";


export const productsRouter = Router()

productsRouter.get('/', async (req: Request, res: Response) => {
	const foundProducts: ProductType[] = await productsRepositories.findProduct(req.query.title?.toString())
	res.send(foundProducts)
	// res.send(204)
})

// productsRouter.get('/:productTitle', async (req: Request, res: Response) => {
// 	const foundProducts = await productsRepositories.findProduct(req.query.title?.toString())
// 	if (foundProducts) {
// 		res.send(foundProducts)
//
// 	} else res.send(404)
// })

productsRouter.delete('/:id', async (req: Request, res: Response) => {
	const isDeleted = await productsRepositories.deleteProduct(+req.params.id)
	isDeleted ? res.send(204) : res.send(404)
})

const titleValidation = body('title').trim().isLength({ min: 4, max: 10 }).withMessage('Title should be should 3 to 10 symbols')

productsRouter.post('/', titleValidation, async (req: Request, res: Response) => {
	const newProduct: ProductType = await productsRepositories.createProduct(req.body.title)
	res.status(201).send(newProduct)
	// res.send(newProduct)
})

productsRouter.put('/:id', titleValidation, async (req: Request, res: Response) => {
	const isUpdated: boolean = await productsRepositories.updateProduct(+req.params.id, req.body.title)
	if (isUpdated) {
		const product = await productsRepositories.getProductById(+req.params.id)
		res.send(product)
	} else res.send(404)

})
