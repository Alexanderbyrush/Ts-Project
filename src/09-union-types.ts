(()=>{
  let userId:string | number;

  userId = 23154;
  userId = 'hola';

  function greeting(myText: string | number){
  //cuando sea un string actuo de una forma y cuando sea un number de otra forma
  //guardiones
  //El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.
  //operando es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo.
  if(typeof myText == 'string'){
      console.log(`string ${myText.toLowerCase()}`)

  } else {
      console.log(`number ${myText.toFixed(1)}`)

  }

  }
   greeting('Migue');
   greeting(13.313);
  })();
