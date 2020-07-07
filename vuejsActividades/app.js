const app = new Vue({
	el:"#app",
 	data: {
		titulo: 'GYM con Vue',
	 	tareas: [],
	        nuevaTarea:'',
	},
 	methods:{
		agregarTarea: function(){
		console.log(this.nuevaTarea)
	}
	}

});
