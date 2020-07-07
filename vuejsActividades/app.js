const app = new Vue({
  el:"#app",
  data: {
  titulo: 'GYM con Vue',
  tareas: [],
    nuevaTarea:'',
},
  methods:{
  agregarTarea: function(){
  this.tareas.push({
   nombre: this.nuevaTarea,
   estado:false
   });
  nuevaTarea='';
  },
  editarTarea: function(index){
   this.tareas[index].estado = true; 
  },
  eliminarTarea: function(index){
  this.tareas.splice(index,1);
  }
  }

});
