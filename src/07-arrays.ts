(() => {
  const prices = [1,2,3,4,5,6, 'hola', true];

  //lo que no puedo hacer
  // prices.push('jkgdsakjgd');
  // prices.push(true);
  // prices.push({});

  prices.push(12313131);
  let products = ['hola', true];
  products.push(false);

  //para escribir booleans, numbers y strings hay que hacerlo de forma explicita
  //se puede usar | objecta y acepta arrays y objetos pero para eso hay un modulo más adelante
  const mixed: (number | string | boolean)[] = ['hola', true];
  //ahora si me deja ingresar números
  mixed.push(12);

  let numbers = [1,2,3,4,5,6,7,8];
  numbers.map(item => item * 2);
  console.log(numbers);

  // Explicacion Concreta

  const numeros: number[] = [1, 2, 3, 4, 5];

//@ts-ignore: Esto da error porque un array de números no acepta textos
numeros.push('hola');


const cadenas : string[] = ['Hola', 'que tal', 'bien', 'chau'];

//@ts-ignore: Esto también da error por lo mismo en este caso de strings
cadenas.push(1);


//Más de un tipo de dato

    const poblationCountries : (string | number)[] = ["Paraguay", 7000000, "Uruguay", 4000000];

    //@ts-ignore: Da error porque no lo pusimos en el mixin de datatypes
    poblationCountries.push(true);


//La forma implícita es la más recomendable siempre y cuando se pueda

const inferedNumbers = [1, 2, 3, 4, 5];

//@ts-ignore: Esto da error igual de forma inferida
inferedNumbers.push('hola');


const inferedStrings = ['Hola', 'que tal', 'chau'];

//@ts-ignore: Esto da error igual de forma inferida
inferedStrings.push(1);

//Más de un tipo de dato

    const inferedPoblationCountries = ["Paraguay", 7000000, "Uruguay", 4000000];

    //@ts-ignore: Da error porque no lo pusimos en el mixin de datatypes
    inferedPoblationCountries.push(true);
})();
