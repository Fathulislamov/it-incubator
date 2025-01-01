import { Router, Request, Response } from "express";
import { body } from "express-validator";
import { productsService, ProductType } from "../domain/products-service";


export const productsRouter = Router()

productsRouter.get('/', async (req: Request, res: Response) => {
	const foundProducts: ProductType[] = await productsService.findProduct(req.query.title?.toString())
	res.send(foundProducts)
	// res.send(204)
})

productsRouter.get('/:productTitle', async (req: Request, res: Response) => {
	const foundProducts = await productsService.findProduct(req.query.title?.toString())
	if (foundProducts) {
		res.send(foundProducts)

	} else res.send(404)
})

productsRouter.delete('/:id', async (req: Request, res: Response) => {
	const isDeleted = await productsService.deleteProduct(+req.params.id)
	isDeleted ? res.send(204) : res.send(404)
})

const titleValidation = body('title').trim().isLength({ min: 4, max: 10 }).withMessage('Title should be should 3 to 10 symbols')

productsRouter.post('/', titleValidation, async (req: Request, res: Response) => {
	const newProduct: ProductType = await productsService.createProduct(req.body.title)
	res.status(201).send(newProduct)
	// res.send(newProduct)
})

productsRouter.put('/:id', titleValidation, async (req: Request, res: Response) => {
	const isUpdated: boolean = await productsService.updateProduct(+req.params.id, req.body.title)
	if (isUpdated) {
		const product = await productsService.getProductById(+req.params.id)
		res.send(product)
	} else res.send(404)

})
