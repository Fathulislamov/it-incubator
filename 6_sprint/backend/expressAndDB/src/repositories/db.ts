import { MongoClient } from "mongodb"

const mongoUri = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017'

export const client = new MongoClient(mongoUri)

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
