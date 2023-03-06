(() => {

  //Es importante tener en cuenta que los casts en TypeScript
  // no cambian realmente el valor subyacente de la variable;
  // solo le dicen al compilador que trate ese valor como si fuera de un tipo diferente.
  // Por lo tanto, si se realiza un cast incorrecto,
   // es posible que se produzcan errores en tiempo de ejecución.

  const myValue: any = "123";
  const myNumber: number = <number>myValue;

  //any= cualquier cosa puede ir ahí
  let myDynamicVar: any;

  //podemos darle cualuqier valor
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar ='';

})();
