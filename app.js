//Varialbles globales
const formularioUI = document.querySelector('#formulario');
const listaActividadesUI  = document.querySelector('#listaActividades');
let arrayActividades = [];

//Funcines 
const CrearItem = ( actividad ) => {
let item = {
  actividad: actividad,
  estado: false
}
arrayActividades.push(item);
return item
}

const GuardarDB = () => {
  localStorage.setItem('rutina', JSON.stringify(arrayActividades));
}

const PintarDB = () => {
  listaActividadesUI.innerHTML='';
  arrayActividades = JSON.parse(localStorage.getItem('rutina'));
 if(arrayActividades === null){
    arrayActividades = [];
 }else{
    arrayActividades.forEach( element => {
      listaActividades.innerHTML += `<div class="alert alert-danger" role="alert"><span class="material-icons float-left mr-2">schedule</span><b>${element.actividad}</b> <strong>${element.estado}</strong><span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete_forever</span></span></div></div>`
    });
 }
}

//EventListener
formularioUI.addEventListener('submit', (e) => {
  e.preventDefault();
  let actividadUI = document.querySelector('#actividad').value;
  CrearItem(actividadUI);
  GuardarDB();
  formularioUI.reset();

});
document.addEventListener('DOMContentLoaded', PintarDB);
