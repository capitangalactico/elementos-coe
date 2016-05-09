/*jshint -W087 */
(function(){
	var data = [{
			"id": 1,
			"nombre": "¿Como me llamo?",
			"respuestas": ["R1", "R2", "R3"],
			"respuesta_correctas": [1, 2],
			"puntuacion": 150,
			"dificultad": 3,
			"color": "red",
			"estado": 1
		}, {
			"id": 2,
			"nombre": "otro",
			"respuestas": ["R1", "R2", "R3"],
			"respuesta_correctas": [1, 2],
			"puntuacion": 150,
			"dificultad": 3,
			"color": "red",
			"estado": 1
		}];
	var equipos = [{
		"id":1,
		"nombre":"Beta",
		"logo":"/images/logo1.png",
		"color":"red",
		"puntos":0
	}, {
		"id":2,
		"nombre":"Alfa",
		"logo":"/images/logo2.png",
		"color":"blue",
		"puntos":0
	}];
	var tablero = [];
	var elegir_pregunta = function (event) {
		var pregunta = data[this.id-1];
		console.log(pregunta); // Pintar pregunta
		$('.boton').on("click",{pregunta: pregunta}, contestar_pregunta);
	}
 
	links_suaves();

	$("#botonazo1").click(function(){
		$.ajax({
   url:mostrar_pregunta(1, 50, "¿Tona es gay?", 2),
   success:function(){
   verificar_respuestas(1,2)
		}
		})
	})
	

})();




function crear_tablero(){}
function calcular_ganador(equipo1, equipo2){} //recibe las puntuaciones y muestra un ganador
function contestar_pregunta(pregunta){} //valida las respuestas del equipo y muestra correcto/incorrecto
function elegir_pregunta(pregunta){} //pintar la nueva interfaz con las respuestas
function disable_pregunta(){} //repinta los estilos para una pregunta contestada correctamente

function links_suaves(){

	//funcion visual no afecta el juego

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1200, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	/*Animacion inicial*/
	$( ".intro" ).animate({
		backgroundPosition:"200px"
	}, 5000);
	$( ".intro .uno" ).animate({
		opacity:"1"
	}, 2000,function(){
	$( ".intro .dos" ).animate({
	 	opacity:"1"
	}, 2000, function(){
	$( ".intro .tres" ).animate({
	 	opacity:"1"
	  }, 2000);
	});
	});
}

function mostrar_pregunta(id_pregunta, puntos, contenido_pregunta, respuestas){
	$("html").jPopup({
		heading:"Pregunta "+id_pregunta+" - "+puntos+"pts",
		paragraph: ""+contenido_pregunta,
		buttonClass : "btn btn-info",
		userContent:"<label><input type='checkbox' id='cbox1' value='first_checkbox'>Tonatihu</label><br><input type='checkbox' id='cbox2' value''second_checkbox'> <label for='cbox2'>Juan Daniel</label><br>"+
		"<button class='popup-close-button btn btn-danger' id='boton"+id_pregunta+"'>Contestar</button>",
		initThrough : function () {
			$(".btn-init-pop").click(function(e) {
				e.preventDefault();
				$.fn.jPopup.openPopup();
			});
			$(".user-content #boton1").on("click",function(){
				alert("hola");
			});
		}
	});
	console.log("antes del call");
	$(document).trigger('function_a_complete');
}

function verificar_respuestas(id_pregunta, respuestas){
	console.log("verificar");
	$(".user-content #boton"+id_pregunta+"").on("click","boton"+id_pregunta,function(){
		var correcto=true;
		/*AQUI VA TU MAGIA PARA VER SI ESTA CORRECTO*/
		if(id_pregunta==1){
			swal(
		  	'Bien hecho',
		  	'Continua así',
		  	'success'
			)
		}else{
			swal(
		  	'Bien hecho',
		  	'Continua así',
		  	'error'
			)
		}
		/*DESPUES DE VERIFICAR AQUI SE LLAMARIA A UN FUNCION QUE AUMENTE LOS PUNTOS DEL EQUIPO Y LOS ACTUALIZAE EN LA UI*/
	});
}
/**
	var crear_tablero = function (){
		console.log("hola crear");
		for(var dato in data) {
			console.log(dato);
			$('.prueba').append('<h2 id='+data[dato].id+'>'+data[dato].id+'</h2>');
			$('#'+data[dato].id).on("click", elegir_pregunta);
			if(data[dato].estado != 1) {
				$('#'+data[dato].id).addClass('contestado');
			}
			//debugger;
		}
	}

	var contestar_pregunta = function (event){
		//disable_pregunta(even.data.pregunta.id-1);
	}
	crear_tablero();
	debugger;
})();

function calcular_ganador(equipo1, equipo2){} //recibe las puntuaciones y muestra un ganador
function contestar_pregunta(pregunta){
	//crear_tablero
	//disable_pregunta(pregunta);

} //valida las respuestas del equipo y muestra correcto/incorrecto
function disable_pregunta(pregunta){
	// Se modifica la data

} //repinta los estilos para una pregunta contestada correctamente
>>>>>>> 46cd8fb52351b63deca9a8fce84145cb9ca902a2
**/