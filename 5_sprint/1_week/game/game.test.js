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
});
