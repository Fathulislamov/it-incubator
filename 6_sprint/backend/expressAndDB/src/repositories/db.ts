import { MongoClient } from "mongodb"
import { ProductType } from "./products-db-repositories"

const mongoUri = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017'

const client = new MongoClient(mongoUri)

const db = client.db("shop")
export const productsCollection = db.collection<ProductType>("products")

export async function runDB() {
	try {
		await client.connect()
		await client.db("poducts").command({ ping: 1 })
		console.log("Connected successfully to mongo server")
	} catch {
		console.log("Can't connect to MongoDB")
		await client.close()
	}
}
