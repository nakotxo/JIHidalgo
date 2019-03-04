/**
 * @file JS_Mapas.js
 * @author J.Ignacio Hidalgo 
*/

/**
* variables Globales
*/
var mapaActivo = ""; // variable con el nombre del mapa activo y visible


$(document).ready(function() {
  arranqueDeMapas();  //visualizar y ocultar mapas;
  /* --------------- Inicio de eventos -------------------- */
  /* -- Evento Click sobre los RadioButton -- */
  $("input[name=optRadioMapa]").click(function(){
    arranqueDeMapas();
  });
  /* ---------------------------------------- */
  /* -- Evento al hacer click sobre un patch -- */
  $("path").click(function(){
    pintarDespintarPath($(this).attr("id"));
  });
  /* ------------------------------------------ */


  $("svg").click(function(){
    pintarDespintarPath($(this).attr("id"));
  });

  /* --------------- FIN de eventos -------------------- */
});


/**
 * Función arranqueDeMapas
 * Establece el mapa a visualizar por defecto al cargar la página
 * el mapa a visualizar de origen es el de bizkaia
 * el cuala es el activo en optRadioMapa por checked
 */
function arranqueDeMapas(){
  var mapaAVisualizar;
  // ocultamos todos los mapas
  if (mapaActivo==""){        // si "mapaActivo" esta vacio es la primera vez y ocultamos tosdos los mapas
    $("#rowBizkaia").css("display","none");    
    $("#rowComarcas").css("display", "none");
    $("#rowMunicipios").css("display", "none");
  }else{                      // y si no ocultamos el activo para visualizar el nuevo
    $("#"+mapaActivo).css("display", "none");;
  }

  // obtenemos el id del mapa a visualizar, lo visualizamos y lo marcamos como activo
  mapaAVisualizar = $('input:radio[name=optRadioMapa]:checked').val();
  $("#"+mapaAVisualizar).css("display", "block");
  mapaActivo=mapaAVisualizar;
}

/**
 * Función pintarDespintarPath
 * Cambia de color el path pintado
 * @param string idPath Id del Path pulsado
 */
function pintarDespintarPath(idPath){
  $("#"+idPath).css("fill","blue");
  alert($("#"+idPath).attr("id"));
}



