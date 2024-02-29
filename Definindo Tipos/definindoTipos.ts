// Typescript possuio inferencia de tipagem:
const user = {
  name: "Hayes", // name: String
  id: 0, // id: number,
};

interface Usuario {
  name: string;
  age: number;
}

const user2: Usuario ={
  name: "Rafael",
  age: 0
}

interface UserInterface {
  name: string;
  age: number;
}

class Usuario implements UserInterface {
  name: string;

  constructor(name: string, age: number){
    this.name = name;
    this.age
  }
}

// outros tipos unknown, any, never

const user3 = new Usuario("Rafael", 28);


console.log(user);
console.log(user2);
console.log(user3);