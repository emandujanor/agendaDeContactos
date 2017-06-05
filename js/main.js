//alert("hola");
$(document).ready(function(){
  // modal de materialize
  $('.modal').modal();
  $("#agregar").click(function() {
    var $contactos=0;
    var $contador=$("#numeroContactos");
    var nombre=$("#icon_prefix").val();
    var telefono=$("#icon_telephone").val();
    var $tarjeta= $('<div class="tarjeta"></div>');
    var $nombre=$('<p class="nombre"></p>');
    var $telefono=$('<p class="telefono"></p>');
    //creo la tarjeta con contacto-nuevo
    $tarjeta.append("<img id='avatar' src='img/avatar.png'/>");
    $tarjeta.append(nombre);
    $tarjeta.append("<br>");
    $tarjeta.append(telefono);
    //imprime tarjeta en el html
    $("#contactos").append($tarjeta);
    //contador
    $contactos= parseInt($contactos + 1);
    $contador.append($contactos);

  });

});
