export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

const jugador1 = new Player("Jose Alejandro", 5);
const jugador2 = new Player("Diana", 10);
const jugador3 = new Player("Luis", 3);

console.log(jugador1.name, jugador1.level);
console.log(jugador2.name, jugador2.level);
console.log(jugador3.name, jugador3.level);

  
  