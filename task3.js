export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
}

const jugador1 = new Player("Jose Alejandro", 5);
const jugador2 = new Player("Diana", 10);
const jugador3 = new Player("Luis", 3);
const jugador4 = new Player("Tara", 6);

jugador1.info();
jugador2.info();
jugador3.info();
jugador4.info();
