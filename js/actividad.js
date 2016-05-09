/*jshint -W087 */
(function(){
	var turno = 1;
	var data = [{
			"id": 1,
			"nombre": "¿Como me llamo?",
			"respuestas": ["R1", "R2", "R3", "fa"],
			"respuesta_correctas": [1, 2],
			"puntuacion": 90,
			"dificultad": 2,
			"color": "red",
			"estado": 1
		}, {
			"id": 2,
			"nombre": "otro",
			"respuestas": ["R1", "R2", "R3", "fsd"],
			"respuesta_correctas": [1, 2],
			"puntuacion": 150,
			"dificultad": 3,
			"color": "red",
			"estado": 2
		},
		{
			"id": 3,
			"nombre": "La otra pregunta",
			"respuestas": ["R1", "R2", "R3", "fd"],
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
	function crear_tablero() {
		console.log("Turno "+ turno);
		var pregunta_actual;
		var enunciado = "";
		var array_preguntas = [];
		for(var indice in data) {
			console.log("hola");
			enunciado = data[indice].nombre;
			pregunta_actual = data[indice].id;
			array_preguntas = data[indice].respuestas;
			$('.contenedor_preguntas').append('<div class="panel panel-default"><div class="panel-heading rel">Pregunta '+pregunta_actual+'<span class="label label-danger left-go">Dif. '+data[indice].dificultad+'</span></div><div class="panel-body"><div class="vista_previa arriba"><p class="circle"><span class="icon-pencil"></span></p><button class="btn btn-block btn-danger btn-lg bold boton-pregunta" id="'+pregunta_actual+'">Contestar</button></p></div><div class="" id="respuestas-'+pregunta_actual+'"><p>'+enunciado+'</p><p class="resp"><input type="checkbox" name="vehicle" value="Bike">'+array_preguntas[0]+'</p><p class="resp"><input type="checkbox" name="vehicle" value="Car">'+array_preguntas[1]+'</p><p class="resp"><input type="checkbox" name="vehicle" value="Bike">'+array_preguntas[2]+'</p><p class="resp"><input type="checkbox" name="vehicle" value="Car">'+array_preguntas[3]+'</p><a href="#" id="confirmar'+pregunta_actual+'" class="btn btn-danger">Confirmar</a></div></div><div class="panel-footer bold"><span class="icon-lock"></span> '+data[indice].puntuacion+' puntos</div></div>');
			$('#confirmar'+pregunta_actual).on('click', {id_pregunta: pregunta_actual}, verificar_respuestas);
		}
	}

	function verificar_respuestas(event){
		console.log("hola desde " + event.data.id_pregunta);
		var id = event.data.id_pregunta;
		var correcto=false;
		/*AQUI VA TU MAGIA PARA VER SI ESTA CORRECTO*/
		var $form_respuestas = $('.respuestas-'+id);
		var respuesta = $form_respuestas.children('input:checked').id;
		debugger;
		if(correcto){
			var porciento = $('.progress-bar').css("width", "+=5");
		swal(
			'Bien hecho',
			'Continua así',
			'success'
		);

		// la pregunta y quien contesto bien
		actualizar_turno(id_pregunta, turno);

		}else{
			swal(
				'Mal hecho',
				'No continues así',
				'error'
			);
		}
		actualizar_turno(id_pregunta);
		/*DESPUES DE VERIFICAR AQUI SE LLAMARIA A UN FUNCION QUE AUMENTE LOS PUNTOS DEL EQUIPO Y LOS ACTUALIZAE EN LA UI*/
	}

	function actulizar_equipos(id_pregunta, equipo) {
		data[id_pregunta-1].estado = 3;
		equipos[equipo-1].puntos = equipos[equipo-1].puntos + data[idpregunta-1].puntuacion;
		if(equipo == 1){
			$("li.team_beta").children('span.badge').html(equipos[equipo-1].puntos);
		} else {
			$("li.team_alpha").children('span.badge').html(equipos[equipo-1].puntos);
		}
	}

	function actualizar_turno(id_pregunta) {
		if(turno == 1) {
			turno = 2;
		} else {
			turno = 1;
		}
	}

	links_suaves();
	crear_tablero();
})();

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
