const languages = [];

// languages.push('JavaScript'); ❌ Error: Argument of type 'string' is not assignable to parameter of type 'never'.

// opcion 1
const languagesTyped: string[] = [];
languagesTyped.push("JavaScript"); // ✅

// opcion 2
const languagesTyped2: Array<string> = [];
languagesTyped2.push("JavaScript"); // ✅

// multiples tipos
const languagesTyped3: (string | number)[] = [];
languagesTyped3.push("JavaScript"); // ✅
languagesTyped3.push(1); // ✅

/*
[
    ['X', 'O', 'X'], // string[]
    ['O', 'X', 'O'],
    ['O', 'O', 'X']
]
*/

type Cell = "X" | "O" | "";
type GameBoard = [
    [Cell, Cell, Cell],
    [Cell, Cell, Cell],
    [Cell, Cell, Cell]
];

const gameBoard: GameBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "O", "X"],
];
