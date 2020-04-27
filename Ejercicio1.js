//objet literals

  //hacer un objeto
  let user = {
    //propiedades y les damos valores claves
    name: 'Jesus',
    age: 20,
    email: 'jesusalejandro2199@gmail.com',
    location: 'chetumal',
    //matriz de diferentes blogs
    blogs:['La orca asesina','La orca cristiana']
};
//ya tenemos este objeto usuario hay que registrarlo en la consola
console.log(user);
//si queremos acceder a algun objeto bien podemos usar la notación punto
//y especificamos que objeto
console.log(user.name);
//si queremos sobrescribir algun dato
//user.age = 35; lo comentamos para ver que al no estar la edad queda como 30
console.log(user.age);
//actualizar una propiedad en un objeto y actualizar propiedades usando la notación de corchetes en lugar de la notación de puntos
//accedemos a la propiedad nombre como lo hicimos anteriormente pero ahora usando corchetes
//asi podemos actualizar los valores de las propiedades que quieras
console.log(user['location']);
user['name'] = 'Gokuzama';
console.log(user['name']);

console.log(typeof user);
