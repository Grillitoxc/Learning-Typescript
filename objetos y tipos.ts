/* Type Alias */

type Hero = {
  name: string;
  age: number;
};

let hero: Hero = {
  name: "Pepe",
  age: 23,
};

function creatHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

// Optional properties
type Hero2 = {
  name: string;
  age: number;
  isActive?: boolean; // Optional
};

function creatHero2(hero: Hero2): Hero2 {
  const { name, age, isActive } = hero;
  return { name, age, isActive };
}

const Thor = creatHero2({ name: "Thor", age: 1000, isActive: true });

// Templates union types
// es una forma de validar que un tipo sea de cierto formato
type HeroId = `${string}-${string}-${string}-${string}-${string}`;

type Hero3 = {
  readonly id?: HeroId;
  name: string;
  age: number;
};

function createHero3(hero: Hero3): Hero3 {
  const { name, age } = hero;
  return {
    id: crypto.randomUUID(), // ✅
    name,
    age,
  };
}

// Union types
// Es un tipo que puede ser cualquiera de esas cadenas de texto
type HeroPowerScale =
  | "local"
  | "plnetary"
  | "galactic"
  | "universal"
  | "multiversal"
  | "omnipotent";

let ann: number | string;
//ann = true ❌ Error porque no es ni number ni string

// Intersection types
// Es una forma de combinar tipos de objetos
type HeroBasicInfo = {
  name: string;
  age: number;
};

type HeroExtraInfo = {
  isActive: boolean;
  power: HeroPowerScale;
};

type HeroComplete = HeroBasicInfo & HeroExtraInfo;

// Type indexing

type HeroPopierties = {
  isActive: boolean;
  address: {
    city: string;
    country: string;
  };
};

const addressHero: HeroPopierties["address"] = {
  city: "Madrid",
  country: "Spain",
};

// Type from value

const adressValue = {
  city: "Madrid",
  country: "Spain",
};

type ExampleAdress = typeof adressValue; // es para sacarle el tipo a una variable

const adress: ExampleAdress = {
  city: "Madrid",
  country: "Spain",
};

// Type from function

function createAdress(city: string, country: string) {
  return {
    city,
    country,
  };
}

type ExampleAdress2 = ReturnType<typeof createAdress>;
