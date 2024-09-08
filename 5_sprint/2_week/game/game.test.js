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
});
