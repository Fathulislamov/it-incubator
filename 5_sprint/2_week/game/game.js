export class Game {
  #settings = {
    gridSize: {
      columns: 4,
      rows: 3,
    },
    googleJumpInterval: 100,
  };

  #status = "pending";
  #player1;
  #player2;
  #google;
  #googleJumpIntervalID;
  #score = {
    1: { points: 0 },
    2: { points: 0 },
  };
  #getRandomPosition(takenPosition = []) {
    let newX;
    let newY;
    do {
      newX = NumberUtil.getRandomNumber(this.#settings.gridSize.columns);
      newY = NumberUtil.getRandomNumber(this.#settings.gridSize.rows);
    } while (
      takenPosition.some(
        (position) => position.x === newX && position.y === newY,
      )
    );
    return new Position(newX, newY);
  }

  #moveGoogleToRandomPosition(isStartPosition) {
    const googlePosition = isStartPosition
      ? this.#getRandomPosition([
          this.#player1.position,
          this.#player2.position,
        ])
      : this.#getRandomPosition([
          this.#player1.position,
          this.#player2.position,
          this.#google.position,
        ]);
    this.#google = new Google(googlePosition);
  }
  #createUnits() {
    const player1Position = this.#getRandomPosition();
    this.#player1 = new Player(1, player1Position);

    const player2Position = this.#getRandomPosition([player1Position]);
    this.#player2 = new Player(2, player2Position);

    const googlePosition = this.#moveGoogleToRandomPosition(true);
    // this.#google = new Google(googlePosition);
  }

  start() {
    if (this.#status === "pending") {
      this.#status = "in-process";
    }

    this.#createUnits();
    this.#googleJumpIntervalID = setInterval(() => {
      this.#moveGoogleToRandomPosition(false);
    }, this.#settings.googleJumpInterval);
  }
  stop() {
    this.#status = "finished";
    clearInterval(this.#googleJumpIntervalID);
  }

  #isBorder(movingPlayer, step) {
    let prevPlayer1Position = movingPlayer.position.copy();
    if (step.x) {
      prevPlayer1Position += step.x;
      return (
        prevPlayer1Position.x < 1 ||
        prevPlayer1Position.x > this.#settings.gridSize.columns
      );
    }
    if (step.y) {
      prevPlayer1Position += step.y;
      return (
        prevPlayer1Position.y < 1 ||
        prevPlayer1Position.y > this.#settings.gridSize.rows
      );
    }
  }
  #isOtherPayer(movingPlayer, otherPlayer, step) {
    let prevPlayer1Position = movingPlayer.position.copy();
    if (step.x) {
      prevPlayer1Position += step.x;
    }
    if (step.y) {
      prevPlayer1Position += step.y;
    }
    return prevPlayer1Position.equal(otherPlayer.position);
  }
  #checkGoogleCathing(movingPlayer) {
    if (movingPlayer.position.equal(this.#google.position)) {
      this.#score[movingPlayer.id].points++;
    }
  }

  movePayer1Right() {
    const step = { x: 1 };
    if (this.#isBorder(this.#player1, step)) return;
    if (this.#isOtherPayer(this.#player1, this.#player2, step)) return;
    this.player1.position.x++;
  }
  movePayer1Left() {
    const step = { x: -1 };
  }
  movePayer1Up() {
    const step = { y: -1 };
  }
  movePayer1Down() {
    const step = { y: 1 };
  }

  movePayer2Right() {
    const step = { x: 1 };
  }
  movePayer2Left() {
    const step = { x: -1 };
  }
  movePayer2Up() {
    const step = { y: -1 };
  }
  movePayer2Down() {
    const step = { y: 1 };
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
  get player1() {
    return this.#player1;
  }
  get player2() {
    return this.#player2;
  }
  get google() {
    return this.#google;
  }
}
class Units {
  constructor(position) {
    this.position = position;
  }
}
class Player extends Units {
  constructor(id, position) {
    super(position);
    this.id = id;
  }
}
class Google extends Units {
  constructor(position) {
    super(position);
  }
}
class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  copy() {
    return new Position(this.x, this.y);
  }
  equal(somePosition) {
    return somePosition.x === this.x && somePosition.y === this.y;
  }
}
class NumberUtil {
  static getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }
}
