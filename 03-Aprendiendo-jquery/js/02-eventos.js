$(document).ready(function () {

    // // mouseover
    var caja = $("#caja");
    // caja.mouseover(function(){
    //     $(this).css('background','red')
    // })

    // // mouseout
    // caja.mouseout(function(){
    //     $(this).css("background", 'green')

    // })

    function cambiaRojo() {
        $(this).css('background', 'red')
    }


    function cambiaVerde() {
        $(this).css("background", 'green')

    }

    // hover
    caja.hover(cambiaRojo, cambiaVerde)


    // click, dobleClick

    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", 'white')
    })

    caja.dblclick(function(){
        $(this).css("background", "pink")
                .css("color", 'yellow')
    })

    // focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos")

    nombre.focus(function(){
        $(this).css("border", "2px solid green")
    })


    nombre.blur(function(){
        $(this).css("border", "1px solid black")
        
        datos.text($(this).val()).show();
    })

    // mousedown y mouseup


    datos.mousedown(function(){
        $(this).css("border-color", "gray")
    })

    datos.mouseup(function(){
        $(this).css("border-color", "black")
    })

    //mousemove

    $(document).mousemove(function(event){
        $('body').css("cursor", "none")
        $("#sigueme").css("left",event.clientX)
        .css("top",event.clientY)
    })
})