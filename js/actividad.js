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
	// remplazar la infomacion del formulario
	var elegir_pregunta = function (event) {
		var pregunta = data[this.id-1];
		console.log(pregunta); // Pintar pregunta
		$('contenedor_pregunta').addClass('visible');
		$('.boton').on("click",{pregunta: pregunta}, contestar_pregunta);
	}
	// actualiza toda la informacion
	var crear_tablero = function (){
		console.log("crear");
		for(var dato in data) {
			$('.prueba').append('<div id='+data[dato].id+'>'+data[dato].id+'</div>');
			$('#'+data[dato].id).on("click", elegir_pregunta);
			if(data[dato].estado != 1) {
				$('#'+data[dato].id).addClass('contestado'); // para desabilitar la pregunta
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
	// evaluar
	// si es correcta marcarla y volver al inicio, si no solo un alert y limpiar campos
	// Asignar puntaje, modificar data
	$('contenedor_pregunta').removeClass('visible');
	//crear_tablero
	//disable_pregunta(pregunta);

} //valida las respuestas del equipo y muestra correcto/incorrecto
function disable_pregunta(pregunta){
	// Se modifica la data

} //repinta los estilos para una pregunta contestada correctamente
