$(document).ready(function(){

    // mover elemento por la pagina
   $(".elemento").draggable();

    // redimensionar
    $(".elemento").resizable();

    // Seleccionar y ordernar elementos
    // $(".lista-seleccionable").selectable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista")
        }
    });

    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area")
        }
    });


    // Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("shake", 3000) // explode, blind, slide, drop, fold, puff, scale, shake, 
    })


    // Tooltip
    $(document).tooltip()

    //Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog()    
    })
    
    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestanas").tabs()
})