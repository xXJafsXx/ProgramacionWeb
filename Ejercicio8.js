//tomar la referencia ul
const ul = document.querySelector('.persona');

const persona = ['Jesus', 'Gloria', 'Amaya', 'Carlos', 'Maria'];
let html = ``;

persona.forEach(function(persona){
    //creando el html templado

    html += `<li style="color: blue">${persona}</li>`;

});

console.log(html);
ul.innerHTML = html;