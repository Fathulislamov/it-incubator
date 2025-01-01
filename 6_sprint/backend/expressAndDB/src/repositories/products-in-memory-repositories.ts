export type ProductType = { id: Number, title: String }

const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }]

export const productsRepositories = {

	async findProduct(title: string | null | undefined): Promise<ProductType[]> {
		if (title) {
			return products.filter(p => p.title.indexOf(title) > -1)
		}
		return products
	},

	async getProductById(id: number): Promise<ProductType> {
		return products.find(p => p.id === id) ?? products[0]
	},

	async createProduct(title: string): Promise<ProductType> {
		const newProduct = {
			id: +(new Date()),
			title: title
		}
		products.push(newProduct)
		return newProduct
	},

	async updateProduct(id: number, title: string): Promise<boolean> {
		const product = products.find(p => p.id === id)
		if (product) {
			product.title = title
			return true
		} else return false
	},

	async deleteProduct(id: number): Promise<boolean> {
		for (let i = 0; i < products.length; i++) {
			if (products[i].id === id) {
				products.splice(i, 1)
				products.map(() => { })
				return true;
			}
		}
		return false
	}
}
