//string templada
 const titulo = 'La orca asesina'
 const autor = 'Jesus Sanchez'
 const likes = 100;

 //concatenando
 let result= 'La obra ' + titulo + ' creada por '+ autor + ' tiene '+ likes + ' likes';
 console.log(result);

 //string templada
 let result2= `La obra ${titulo} creada por ${autor} tiene ${likes} likes`;
 console.log(result2);

 //html templado
 let html = `
 <h2>${titulo}</h2>
 <p>${autor}</p>
 <span>Este sitio tiene ${likes} likes</span>
 `;
 console.log(html);