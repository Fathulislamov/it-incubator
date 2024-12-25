
import { Router, Request, Response } from "express";
export const addressesRouter = Router()
const adresess = [{ id: 1, value: 'Nezalejnasti 12' }, { id: 2, value: 'Selickaga 11' }]

addressesRouter.get('/', (req: Request, res: Response) => { res.send(adresess) })

addressesRouter.get('/:id', (req: Request, res: Response) => {
	const address = adresess.find(p => p.id === +req.params.id)
	if (address) {
		res.send(address)
	} else res.send(404)
})
