//Variables globales
const contenido = document.querySelector('#contenido');
const obtener = document.querySelector('#obtener ')

//Funciones
function traer(){
  fetch('table.json')
       .then(res => res.json())
       .then(datos => {
     //console.log(datos)
	pintarTable(datos)
       })
}
function pintarTable(datos){ 
   contenido.innerHTML = "";
   for(let valor of datos){
   const {id, nombre, email, estado} = valor;
   contenido.innerHTML += `<tr>
      <th scope="row">${id}</th>
      <td>${nombre}</td>
      <td>${email}</td>
      <td>${estado ? "Activo": "Debaja"}</td>
    </tr>`
   }
}
//Eventos
obtener.addEventListener('click', traer)
