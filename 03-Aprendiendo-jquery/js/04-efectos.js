$(document).ready(function(){
    var caja = $("#caja")
    $("#mostrar").hide()

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show()
        caja.slideDown('slow');  //show, fadeIn  fadeTo 1 para mostrar, slidedown
    })

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show()
        caja.slideUp("slow", function(){
            console.log("cartel ocultado")
        }); //hide, fadeOut, fadeTo 0 ocultar, slideup
        
    })

    // $("#todoenuno").click(function(){
    //     $('#caja').toggle('fast')      // es practicamente un todo en uno (Toggle), fadeToggle efecto fade, slideToggle 
    // })

    $("#animar").click(function(){
        caja.animate({
                        marginLeft:'500px',
                        fontSize: '40px',
                        height: '110px'
                    }, 'slow')
            .animate({
                        borderRadius: '900px',
                        marginTop:'80px'
                    }, 'slow')

            .animate({
                        borderRadius: '0px',
                        marginLeft:'0px'

                        }, 'slow')
            .animate({
                        borderRadius: '100px',
                        marginTop:'0px'
                        }, 'slow')
            .animate({
                            marginLeft:'500px',
                            fontSize: '40px',
                            height: '110px'
                        }, 'slow')
            
    })

});
