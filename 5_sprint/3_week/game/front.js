import { Game } from './game.js'
import { EventEmitter } from './evetnEmitter.js'

const eventEmitter = new EventEmitter()

const game = new Game(eventEmitter)
game.settings.gridSize = {
	rows: 4,
	columns: 4
}

const tableElement = document.getElementById('grid')

game.start()

window.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'ArrowUp':
			game.movePayer1Up()
			break
		case 'ArrowDown':
			game.movePayer1Down()
			break
		case 'ArrowLeft':
			game.movePayer1Left()
			break
		case 'ArrowRight':
			game.movePayer1Right()
			break
	}
})

const render = () => {

	tableElement.innerHTML = ''

	for (let y = 1; y <= game.settings.gridSize.rows; y++) {
		const trElement = document.createElement('tr')
		tableElement.append(trElement)
		for (let x = 1; x <= game.settings.gridSize.columns; x++) {
			const tdElement = document.createElement('td')
			trElement.append(tdElement)
			if (game.google.position.x === x && game.google.position.y === y) {
				const imgElement = document.createElement('img')
				imgElement.src = './assets/google.webp'
				imgElement.alt = 'google image'
				tdElement.append(imgElement)
			}
			if (game.player1.position.x === x && game.player1.position.y === y) {
				const imgElement = document.createElement('img')
				imgElement.src = './assets/player1.png'
				imgElement.alt = 'player1 image'
				tdElement.append(imgElement)
			}
			if (game.player2.position.x === x && game.player2.position.y === y) {
				const imgElement = document.createElement('img')
				imgElement.src = './assets/player2.png'
				imgElement.alt = 'player2 image'
				tdElement.append(imgElement)
			}
		}
	}
}

render()

game.eventEmitter.subscribe('changePosition', render)
