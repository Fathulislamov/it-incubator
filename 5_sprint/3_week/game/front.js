import { Game } from './game.js'

const game = new Game()
game.settings.gridSize = {
	rows: 4,
	columns: 4
}

const tableElement = document.getElementById('grid')
for (let y = 1; y <= game.settings.gridSize.rows; y++) {
	const trElement = document.createElement('tr')
	tableElement.append(trElement)
	for (let x = 1; x <= game.settings.gridSize.columns; x++) {
		const tdElement = document.createElement('td')
		trElement.append(tdElement)
	}
}
