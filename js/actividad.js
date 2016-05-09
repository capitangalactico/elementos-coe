(function(){
	 
	var tablero = [];
	var equipos = [];

	var pregunta = {
		"id":1,
		"nombre":"¿Como me llamo?",
		"respuestas":["R1","R2","R3"],
		"respuesta_correctas":[1,2],
		"puntuacion": 150,
		"dificultad": 3,
		"color":"red",//de acuerdo a la dificultad
		"estado":1 //1-contestado, 2-sin contestar
	}

	var equipo = {
		"id":1,
		"nombre":"Beta",
		"logo":"/images/logo1.png",
		"color":"red",
		"puntos":0
	}

	links_suaves();
	verificar_respuestas(1, 2);
	mostrar_pregunta(1, 50, "¿Tona es gay?", 2);
	

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
		userContent:"<label><input type='checkbox' id='cbox1' value='first_checkbox'>Tonatihu</label><br><input type='checkbox' id='cbox2' value''second_checkbox'> <label for='cbox2'>Juan Daniel</label><br><button class='popup-close-button btn btn-danger' id='boton"+id_pregunta+"'>Contestar</button>",
		initThrough : function () {
			$(".btn-init-pop").click(function(e) {
				e.preventDefault();
				$.fn.jPopup.openPopup();
			});
		}
	});
}

function verificar_respuestas(id_pregunta, respuestas){
	$("boton"+id_pregunta+"").click(function(){
		var correcto=true;
		/*AQUI VA TU MAGIA PARA VER SI ESTA CORRECTO*/
		if(correcto){
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