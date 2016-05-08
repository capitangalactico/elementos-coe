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

	tablero[1] = pregunta;

	$('.prueba').append('<h1>'+equipo.nombre+'<h1>');
})();

function crear_tablero(){}
function calcular_ganador(equipo1, equipo2){} //recibe las puntuaciones y muestra un ganador
function contestar_pregunta(pregunta){} //valida las respuestas del equipo y muestra correcto/incorrecto
function elegir_pregunta(pregunta){} //pintar la nueva interfaz con las respuestas
function disable_pregunta(){} //repinta los estilos para una pregunta contestada correctamente
