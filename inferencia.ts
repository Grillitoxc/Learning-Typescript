/* Inferencia de tipos */

let number = 10; // Detecta sólo que es un number
// number = "holi"; // Error type string is not assignable to type number

// Si queremos que sea de un tipo específico
let n: number = 10;

// Cualquier tipo
let anyType: any = 10;
anyType = "hola"; // Funciona como "js normal", que ignore el tipo. Es una forma de saltarse el type checking (evitar)

// No sabemos el tipo
let unknownType: unknown = 10;
// unknownType.toString(); // Error, no sabe el tipo

const a = 10;
const b = 20;
const c = a + b; // Detecta que es un number para c 

