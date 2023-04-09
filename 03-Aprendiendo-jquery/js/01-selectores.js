$(document).ready(function(){
    // Selector de ID
    $("#rojo").css("background", "red")
                            .css("color", "white");
    
    $("#amarillo").css("background", "yellow")
                                .css("color", "green")

    $("#verde").css("background", "green")
    .css("color", "brown")


    // Selector de clases

    var mi_clase = $(".zebra").css("padding", "5px")
    mi_clase
    // console.log(mi_clase.eq(1))

    $('.sin_borde').click(function(){
        console.log("click dado")
        $(this).addClass("zebra")
    })


    // Selector de etiquetas
    var parrafos = $('p').css("cursor","pointer");


    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass("grande")){
            that.addClass("grande")
        }else{
            that.removeClass("grande")
        }



    })

    // Selectores de atributo

    $('[title="google"]').css("background", "#ccc")
    $('[title="facebook"]').css("background", "blue")


    //Otros
    // $('p, a').addClass('margen_superior')
    // var busqueda = $("#caja").find('.resaltado')
    // var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="google"]')
    var busqueda = $("#elemento2").parent().parent().find('resultado')
    console.log(busqueda)
})