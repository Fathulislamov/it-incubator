export class Game {
  #settings;
  #status = "pending";
  #player1;
  #player2;
  #google;
  #getRandomPosition(takenPosition = []) {
    let newX;
    let newY;
    do {
      newX = NumberUtil.getRandomNumber(this.#settings.gridSize.colunms);
      newY = NumberUtil.getRandomNumber(this.#settings.gridSize.rows);
    } while (
      takenPosition.some(
        (position) => position.x === newX && position.y === newY,
      )
    );
    return new Position(newX, newY);
  }

  start() {
    if (this.#status === "pending") {
      this.#status = "in-process";
    }
    const player1Position = this.#getRandomPosition();
    this.#player1 = new Player(1, player1Position);
    const player2Position = this.#getRandomPosition([player1Position]);
    this.#player2 = new Player(2, new Position(2, 3));
  }
  set settings(settings) {
    this.#settings = settings;
  }
  get settings() {
    return this.#settings;
  }
  get status() {
    return this.#status;
  }
}
class Player {
  constructor(id, position) {
    this.id = id;
    this.position = position;
  }
}
class Google {
  constructor(position) {
    this.position = position;
  }
}
class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class NumberUtil {
  static getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }
}
