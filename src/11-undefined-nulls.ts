(()=> {

    // No Entra dentro de esos conjuntos de datos, Number o String etc...
    //  let myNumber: number = undefined;
   //let myString: string = null;

   let myNumber: number | null = null; // Iinicializa como null Pero Luego ya Puedo darle su complemento de tipo Number
  myNumber = 12;

  let myString: string | undefined = undefined; //  // Iinicializa como undefined Pero Luego ya Puedo darle su complemento de tipo String
  myString = 'ass';

  function hi (name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody'; // Optional Change
    console.log(hello);
  }

  hi('Nicolas');
  hi(null);
  hiV2('Nicolas');
  hiV2(null);
})();
