import { Game } from "./game";
describe("Game Tests", () => {
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
      expect([1, 2, 3, 4]).toContain(game.payer1.position.x);
      expect([1, 2, 3]).toContain(game.payer1.position.y);
      expect([1, 2, 3, 4]).toContain(game.payer2.position.x);
      expect([1, 2, 3]).toContain(game.payer2.position.y);
    }
  });
});
