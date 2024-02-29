"use strict";
// Typescript possuio inferencia de tipagem:
const user = {
    name: "Hayes", // name: String
    id: 0, // id: number,
};
const user2 = {
    name: "Rafael",
    age: 0
};
class Usuario {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user3 = new Usuario("Rafael", 28);
console.log(user);
console.log(user2);
console.log(user3);
