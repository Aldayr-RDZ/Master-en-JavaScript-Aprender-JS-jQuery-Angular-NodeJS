'use strict'

// Eventos del ratón 

window.addEventListener('load',()=>{
    function cambiarColor(){
        console.log("Me haz dado click");
    
        var bg = boton.style.background
    
        if(bg == "green"){
            boton.style.background = "red"
        }else{
            boton.style.background = "green"
        }
        boton.style.padding= "10px";
        boton.style.border = "1px solid #ccc"
    
        return true;
    }
    
    var boton = document.querySelector("#boton");
    
    
    // Click 
    boton.addEventListener('click', function(){
        cambiarColor();
        boton.style.border = "10px solid black"
    }
    )
    
    // Mouse Over
    
    boton.addEventListener("mouseover", function(){
        this.style.background = "#ccc"
    })
    
    // Mouse out
    
    boton.addEventListener("mouseout", function(){
        boton.style.background = "yellow"
    })
    
    var input = document.querySelector("#campo_nombre")
    // focus 
    // cada vez que te pongas dentro del input se activa 
    
    input.addEventListener("focus", function(){
       console.log("{focus} Estas dentro del input");
    
    })
    
    
    // blur
    // cuando salimos del input lo opuesto de focus
    
    input.addEventListener("blur", function(){
       console.log("{blur} Estas fuera del input");
    
    })
    
    // el orden seria 
    /*
        1. keydown Pulsando la tecla 
        2. keypress Tecla presionada
        3. keyup Tecla soltada
    */
    
    
    // keydown
    // Pulsando esta tecla
    input.addEventListener("keydown", function(event){
       console.log("{keydown} Pulsando esta tecla", String.fromCharCode(event.keyCode));
    
    })
    
    
    // keypress
    // Tecla que se esta presionando
    input.addEventListener("keypress", function(event){
        console.log("{keypress} Tecla presionada", String.fromCharCode(event.keyCode));
     
     })
     
    
    // keyup
    // Tecla que se dejo de presionar
    input.addEventListener("keyup", function(event){
        console.log("{keyup} Tecla soltada", String.fromCharCode(event.keyCode));
     
     })
})
