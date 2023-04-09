'use strict'


window.addEventListener('load', ()=>{

    // timers 
    // setTimeout solo se hara una vez 
    // setInterval se hara en repetidas ocasiones


    function intrvalo(){
        var  tiempo = setInterval(function(){
            console.log("Set interval ejecutado")
    
                var encabezado = document.querySelector("h1");
                if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px"
                }else{
                    encabezado.style.fontSize ="50px";
                }
            
        }, 1000);

        return tiempo;
    }

    var tiempo = intrvalo();



    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle")
        clearInterval(tiempo)
    })

    var start = document.querySelector("#start");

    start.addEventListener("click", function(){
        alert("Has iniciado el intervalo en bucle")
        intrvalo();
    })
})