/*jshint -W087 */
(function(){
	var equipos = [];
	var tablero = [];
	var equipo = {
		"id":1,
		"nombre":"Beta",
		"logo":"/images/logo1.png",
		"color":"red",
		"puntos":0
	}

	var elegir_pregunta = function (event) {
		var self = this;
		$.getJSON("./js/data.json", function(json) {
			var pregunta = json.preguntas[self.id-1];
			debugger;
			console.log(pregunta);
		});
	}

	var crear_tablero = function (){
		console.log("hola crear");
		$.getJSON("./js/data.json", function(json) {
			for(var dato in json.preguntas) {
				console.log(dato);
				$('.prueba').append('<h2 id='+json.preguntas[dato].id+'>'+json.preguntas[dato].id+'</h2>');
				$('#'+json.preguntas[dato].id).on("click", elegir_pregunta);
				//debugger;
			}
			return json.preguntas;
		});
	}
	tablero = crear_tablero();
})();

function calcular_ganador(equipo1, equipo2){} //recibe las puntuaciones y muestra un ganador
function contestar_pregunta(pregunta){} //valida las respuestas del equipo y muestra correcto/incorrecto
function disable_pregunta(pregunta){} //repinta los estilos para una pregunta contestada correctamente
