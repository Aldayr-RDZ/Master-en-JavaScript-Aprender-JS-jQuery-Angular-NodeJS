$(document).ready(function(){
    
    // Load
    // $("#datos").load("https://reqres.in/")


    // Get y Post

    $.get("https://reqres.in/api/users", {page:2}, function(response){
        response.data.forEach((element, index)=>{
            $("#datos").append("<p>"+element.first_name+"-"+element.last_name+"</p>")
        })
    });

    var usuario ={
        "name" : "Aldaya Rodriguez",
        "job": "Software Developer"
    }
    $.post("https://reqres.in/api/users", usuario, function(response){
        console.log(response)
    })

    $("#formulario").submit(function(event){
        event.preventDefault();
        var usuario ={
            "name" : $('input[name="name"').val(),
            "job": $('input[name="job"').val()
        }
        // console.log(usuario)
        // $.post($(this).attr("action"), usuario, function(response){
        //     console.log(response)
        // }).done(function(){
        //     console.log("Se ha añadido correctamente")
        // })

        $.ajax({
            type: 'POST',
            url:$(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario")
            },
            success: function(response){
                console.log(response)
            },
            error: function(){
                console.log("A ocurrido un error")
            },
            timeout: 2000

        })


        return false
    })




})