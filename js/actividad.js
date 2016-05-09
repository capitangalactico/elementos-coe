/*jshint -W087 */
(function(){
	var data = [{
			"id": 1,
			"nombre": "¿Como me llamo?",
			"respuestas": ["R1", "R2", "R3"],
			"respuesta_correctas": [1, 2],
			"puntuacion": 90,
			"dificultad": 2,
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
	function crear_tablero(){
		for(var dato in data) {
			console.log(dato);
			$(".contenedor_preguntas").append('<div class="panel panel-default" id="'+data[dato].id+'"><div class="panel-heading rel">Pregunta '+data[dato].id+'<span class="label label-danger left-go">Dif. '+data[dato].dificultad+'</span></div><div class="panel-body"><p class="circle"><span class="icon-pencil"></span></p><button class="btn btn-init-pop btn-block btn-danger btn-lg bold" id="'+data[dato].id+'">Contestar</button></p></div><div class="panel-footer bold"><span class="icon-lock"></span> '+data[dato].puntuacion+' puntos</div></div>');
		}
	}

	links_suaves();
	crear_tablero();
	mostrar_pregunta(1, 50, "¿Tona es gay?", 2);
	//mostrar_pregunta(2, 150, "¿Tona es gay?", 2);
	verificar_respuestas(1, 2);

})();

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
				$.fn.jPopup({
					heading:"Pregunta "+id_pregunta+" - "+puntos+"pts",
					paragraph: ""+contenido_pregunta,
					buttonClass : "btn btn-info",
					userContent:"<label><input type='checkbox' id='cbox1' value='first_checkbox'>Tonatihu</label><br><input type='checkbox' id='cbox2' value''second_checkbox'> <label for='cbox2'>Juan Daniel</label><br><button class='popup-close-button btn btn-danger' id='boton"+id_pregunta+"'>Contestar</button>"});
				$.fn.jPopup.openPopup();
				debugger;
			});
		}
	});
}

function verificar_respuestas(id_pregunta, respuestas){
	$("boton"+id_pregunta+"").click(function(){
	console.log("hola");

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
