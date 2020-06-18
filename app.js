//Varialbles globales
const formularioUI = document.querySelector("#formulario");
const listaActividadesUI = document.querySelector("#listaActividades");
let arrayActividades = [];

//Funcines
const CrearItem = (actividad) => {
  let item = {
    actividad: actividad,
    estado: false,
  };
  arrayActividades.push(item);
  return item;
};

const GuardarDB = () => {
  localStorage.setItem("rutina", JSON.stringify(arrayActividades));
  PintarDB();
};

const PintarDB = () => {
  listaActividadesUI.innerHTML = "";
  arrayActividades = JSON.parse(localStorage.getItem("rutina"));
  if (arrayActividades === null) {
    arrayActividades = [];
  } else {
    arrayActividades.forEach((element) => {
      listaActividades.innerHTML += `<div class="alert alert-danger" role="alert"><span><span class="material-icons float-left mr-2">schedule</span><b>${element.actividad}</b> -${element.estado}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete_forever</span></span></span></div>`;
    });
  }
};

const EliminarDB = ( actividad ) => {
  let indexArray;
   arrayActividades.forEach((element, index) => {
    if(element.actividad === actividad){
      indexArray = index;
     console.log(indexArray);
    }

   })
}

//EventListener
formularioUI.addEventListener("submit", (e) => {
  e.preventDefault();
  let actividadUI = document.querySelector("#actividad").value;
  CrearItem(actividadUI);
  GuardarDB();
  formularioUI.reset();
});
document.addEventListener("DOMContentLoaded", PintarDB);
listaActividadesUI.addEventListener("click", (e) => {
  e.preventDefault();
  if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete_forever'){
	let text = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === 'delete_forever'){
	    // Accion de eliminar
	    EliminarDB(text);
	}
        if(e.target.innerHTML === 'done'){

	}
  }
});
