import { Game } from "./game";
describe("Game Tests", () => {
	let game;
	beforeEach(() => {
		game = new Game();
	});
	afterEach(() => {
		game.stop();
	});

	it("should return gridSize", () => {
		const game = new Game();
		game.settings = {
			gridSize: {
				columns: 10,
				rows: 10,
			},
		};
		const settings = game.settings;
		expect(settings.gridSize.rows).toEqual(10);
		expect(settings.gridSize.columns).toEqual(10);
	});

	it("should change status", () => {
		const game = new Game();
		game.settings = {
			gridSize: {
				columns: 10,
				rows: 10,
			},
		};
		expect(game.status).toEqual("pending");
		game.start();
		expect(game.status).toEqual("in-process");
	});

	it("should units have unique position", () => {
		for (let i = 0; i < 10; i++) {
			const game = new Game();
			game.settings = {
				gridSize: {
					columns: 4,
					rows: 3,
				},
			};
			game.start();
			expect([1, 2, 3, 4]).toContain(game.player1.position.x);
			expect([1, 2, 3]).toContain(game.player1.position.y);

			expect([1, 2, 3, 4]).toContain(game.player2.position.x);
			expect([1, 2, 3]).toContain(game.player2.position.y);

			expect(
				(game.player1.position.x !== game.player2.position.x ||
					game.player1.position.y !== game.player2.position.y) &&
				(game.player1.position.x !== game.google.position.x ||
					game.player1.position.y !== game.google.position.y) &&
				(game.player2.position.x !== game.google.position.x ||
					game.player2.position.y !== game.google.position.y),
			).toBe(true);
			game.stop();
		}
	});

	it("should google change position", async () => {
		for (let i = 0; i < 10; i++) {
			game = new Game();
			game.settings = {
				gridSize: {
					columns: 4,
					rows: 3,
				},
				googleJumpInterval: 100,
			};
			game.start();

			// google position
			const prevGooglePositon = game.google.position.copy();

			// waiting;
			await sleep(150);

			// compare position
			expect(prevGooglePositon.equal(game.google.position)).toBe(false);
			game.stop();
		}
	});
	const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

	it("should google be caught by player1 or player2 for one row", async () => {
		for (let i = 0; i < 10; i++) {
			game = new Game();
			game.settings = {
				gridSize: {
					columns: 3,
					rows: 1,
				},
			};
			game.start();
			const diffForPlayer1 = game.google.position.x - game.player1.position.x;
			const prevGooglePositon = game.google.position.copy();
			if (Math.abs(diffForPlayer1) === 2) {
				const diffForPlayer2 = game.google.position.x - game.player2.position.x;
				if (diffForPlayer2 > 0) {
					game.movePayer2Right();
				} else {
					game.movePayer2Left();
				}
				expect(game.score[1].points).toBe(0);
				expect(game.score[2].points).toBe(1);
			} else {
				if (diffForPlayer1 > 0) {
					game.movePayer1Right();
				} else {
					game.movePayer1Left();
				}
				expect(game.score[1].points).toBe(1);
				expect(game.score[2].points).toBe(0);
			}
			expect(game.google.position.equal(prevGooglePositon)).toBe(false);
			game.stop();
		}
	});
	it("should google be caught by player1 or player2 for one column", async () => {
		for (let i = 0; i < 10; i++) {
			game = new Game();
			game.settings = {

				gridSize: {
					columns: 1,
					rows: 3,
				},
			};

			game.start();
			const diffForPlayer1 = game.google.position.y - game.player1.position.y;
			const prevGooglePositon = game.google.position.copy();
			if (Math.abs(diffForPlayer1) === 2) {
				const diffForPlayer2 = game.google.position.y - game.player2.position.y;
				if (diffForPlayer2 > 0) {
					game.movePayer2Down();
				} else {
					game.movePayer2Up();
				}
				expect(game.score[1].points).toBe(0);
				expect(game.score[2].points).toBe(1);
			} else {
				if (diffForPlayer1 > 0) {
					game.movePayer1Down();
				} else {
					game.movePayer1Up();
				}
				expect(game.score[1].points).toBe(1);
				expect(game.score[2].points).toBe(0);
			}
			expect(game.google.position.equal(prevGooglePositon)).toBe(false);
			game.stop();
		}
	});
	it('first or second player wins', () => {
		game = new Game();
		game.settings = {
			pointsToWin: 3,
			gridSize: {
				columns: 3,
				rows: 1,
			},
		};

		game.start();
		const diffForPlayer1 = game.google.position.x - game.player1.position.x;
		if (Math.abs(diffForPlayer1) === 2) {
			const diffForPlayer2 = game.google.position.x - game.player2.position.x;
			if (diffForPlayer2 > 0) {
				game.movePayer2Right()
				game.movePayer2Left()
				game.movePayer2Right()
			} else {
				game.movePayer2Left()
				game.movePayer2Right()
				game.movePayer2Left()
			}
			expect(game.status).toBe('finished');
			expect(game.score[1].points).toBe(0)
			expect(game.score[2].points).toBe(3)
		} else {
			if (diffForPlayer1 > 0) {
				game.movePayer1Right()
				game.movePayer1Left()
				game.movePayer1Right()
			} else {
				game.movePayer1Left()
				game.movePayer1Right()
				game.movePayer1Left()
			}
			expect(game.status).toBe('finished');
			expect(game.score[1].points).toBe(3)
			expect(game.score[2].points).toBe(0)
		}
	})
});
