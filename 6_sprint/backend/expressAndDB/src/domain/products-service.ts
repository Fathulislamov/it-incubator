import { productsCollection } from "../repositories/db"
import { productsRepositories } from "../repositories/products-db-repositories"


export type ProductType = { id: Number, title: String }


export const productsService = {

	async findProduct(title: string | null | undefined): Promise<ProductType[]> {
		return productsRepositories.findProduct(title)
	},

	async getProductById(id: number): Promise<ProductType | null> {
		return productsCollection.findOne({ id })

		// return products.find(p => p.id === id) ?? products[0]
	},

	async createProduct(title: string): Promise<ProductType> {
		const newProduct = {
			id: +(new Date()),
			title: title
		}
		const createdProduct = await productsRepositories.createProduct(newProduct)
		return createdProduct
	},

	async updateProduct(id: number, title: string): Promise<boolean> {
		return await productsRepositories.updateProduct(id, title)
	},

	async deleteProduct(id: number): Promise<boolean> {
		return await productsRepositories.deleteProduct(id)
	}
}
