export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;
    this.experienceToLevelUp = 100;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level++;
    this.experience = 0;
    console.log(`${this.name} leveled up! Now is Level ${this.level}`);
  }

  gainExperience(points) {
    this.experience += points;
    console.log(`${this.name} gained ${points} XP. Total: ${this.experience} XP.`);

    if (this.experience >= this.experienceToLevelUp) {
      this.levelUp();
    }
  }
}

const jugador1 = new Player("Jose Alejandro", 5);
const jugador2 = new Player("Diana", 10);
const jugador3 = new Player("Luis", 3);

jugador1.gainExperience(50);
jugador1.gainExperience(60);

jugador2.gainExperience(120);
jugador2.gainExperience(30);

jugador3.gainExperience(30);
jugador3.gainExperience(40);
