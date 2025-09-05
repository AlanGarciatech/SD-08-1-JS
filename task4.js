export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
  }
}

const jugador1 = new Player("Jose Aljandro", 5);
const jugador2 = new Player("Diana", 10);
const jugador3 = new Player("Luis", 3);

jugador1.info();  
jugador1.levelUp();
jugador1.info(); 

jugador2.info();   
jugador2.levelUp();
jugador2.info();   

jugador3.info();  
jugador3.levelUp();
jugador3.info();   
