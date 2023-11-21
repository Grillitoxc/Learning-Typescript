/* Tipado de funciones */

// La inferencia de Ts tampoco hace magia..., si no le pongo nada al argumento, no sabe el tipo (any)
/*
function saludar(name) {
    console.log(`hola ${name}`); ❌
}
*/

// Si le pongo el tipo, ya sabe que es un string
function saludar(name: string) {
  console.log(`hola ${name}`);
}

saludar("Pepe"); // ✅
// saludar(1); // ❌

// Colisiones en renombramiento de objetos ❌
/*
function saludar2({ name: string, age: number }) {
  console.log(`hola ${name} tienes ${age} años`);
}
*/

// Solución: ✅ { objeto }: { tipo de objeto }
function saludar2({ name, age }: { name: string; age: number }) {
  console.log(`hola ${name} tienes ${age} años`);
}

saludar2({ name: "Pepe", age: 23 }); // ✅

// Pasar un objeto como argumento
function saludar3(person: { name: string; age: number }) {
  // Te obliga a sacar las propiedades del objeto
  const { name, age } = person;
  console.log(`hola ${name} tienes ${age} años`);
}

const person = { name: "Pepe", age: 23 };
saludar3(person); // ✅ 
