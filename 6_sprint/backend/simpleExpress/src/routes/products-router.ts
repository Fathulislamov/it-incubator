import { Router, Request, Response } from "express";
import { productsRepositories, ProductType } from "../repositories/products-repositories";
import { body, validationResult } from "express-validator";
import { inputWalidationMiddleware } from "../middlewares/input-walidation-middleware";


export const productsRouter = Router()

productsRouter.get('/', async (req: Request, res: Response) => {

	const foundProducts: ProductType[] = await productsRepositories.findProduct(req.query.title?.toString())


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

const titleValidation = body('title').trim().isLength({ min: 4, max: 10 }).withMessage('Title should be should 3 to 10 symbols')

productsRouter.post('/', titleValidation, inputWalidationMiddleware, async (req: Request, res: Response) => {
	const newProduct: ProductType = await productsRepositories.createProduct(req.body.title)
	res.status(201).send(newProduct)
})

productsRouter.put('/:id', titleValidation, inputWalidationMiddleware, async (req: Request, res: Response) => {
	const isUpdated: boolean = await productsRepositories.updateProduct(+req.params.id, req.body.title)
	if (isUpdated) {
		const product = productsRepositories.getProductById(+req.params.id)
		res.send(product)
	} else res.send(404)

})
