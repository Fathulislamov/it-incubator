import { productsCollection } from "./db"

export type ProductType = { id: Number, title: String }


export const productsRepositories = {

	async findProduct(title: string | null | undefined): Promise<ProductType[]> {
		const filter: any = {}
		if (title) {
			filter.title = { $regex: title }
		}
		return productsCollection.find(filter).toArray()
	},

	async getProductById(id: number): Promise<ProductType | null> {
		return productsCollection.findOne({ id })

		// return products.find(p => p.id === id) ?? products[0]
	},

	async createProduct(newProduct: ProductType): Promise<ProductType> {
		const result = await productsCollection.insertOne(newProduct)
		return newProduct
	},

	async updateProduct(id: number, title: string): Promise<boolean> {
		const result = await productsCollection.updateOne({ id }, { $set: { title } })
		return result.matchedCount === 1
	},

	async deleteProduct(id: number): Promise<boolean> {
		const result = await productsCollection.deleteOne({ id })
		return result.deletedCount === 1
	}
}
