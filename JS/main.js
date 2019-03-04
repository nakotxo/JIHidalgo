/**
 *
 * directorio ejemplo slider range
 * https://www.w3schools.com/howto/howto_js_rangeslider.asp
 * https://css-tricks.com/value-bubbles-for-range-inputs/
 */
function divisionesSlider(divisiones){
    var anchoSlider = $("#myRange").width();
    var espacioSlider = anchoSlider/(divisiones-1);
    var coordenadasSlider = $("#myRange").offset();

    //$("#parrafo").offset({top: 800, left: 200});

    var txtSeparador = [];
    for (i=0;i<divisiones;i++){
        txtSeparador[i]= $("<p id='txt"+i+"'></p>").text("|");   // Create with jQuery
        $("body").append(txtSeparador[i]);
        coordenadasSeparador = coordenadasSlider.left;
        coordenadasSeparador = coordenadasSeparador + (i * espacioSlider);
        coordenadasAltas = coordenadasSlider.top - 30;
        $("#txt"+i).offset({top:coordenadasAltas, left:coordenadasSeparador});
    }

}
/**
 * al cargar la pagina
 */
$(document).ready(function() {
    var divisiones=13;
    $("#btnSumar").click(function(){
    alert("hello");
    var valor = $("#myRange").val();
    valor++;
    $("#myRange").attr("value",valor);
    });

    $("#btnRestar").click(function(){
        alert("Restamos");
        var valor = $("#myRange").val();
        valor--;
        $("#myRange").attr("value",valor);
    });

});

// DOM Ready
$(function() {
    var el, newPoint, newPlace, offset;
    
    // Select all range inputs, watch for change
    $("input[type='range']").change(function() {
    
      // Cache this for efficiency
      el = $(this);
      
      // Measure width of range input
      width = el.width();
      
      // Figure out placement percentage between left and right of input
      newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
      
      // Janky value to get pointer to line up better
      offset = -1.3;
      
      // Prevent bubble from going beyond left or right (unsupported browsers)
      if (newPoint < 0) { newPlace = 0; }
      else if (newPoint > 1) { newPlace = width; }
      else { newPlace = width * newPoint + offset; offset -= newPoint; }
      
      // Move bubble
      el
        .next("output")
        .css({
          left: newPlace,
          marginLeft: offset + "%"
        })
        .text(el.val());
    })
    // Fake a change to position bubble at page load
    .trigger('change');
});
