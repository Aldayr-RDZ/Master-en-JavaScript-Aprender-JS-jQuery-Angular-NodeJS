$(document).ready(function () {
    // Slider

    if(window.location.href.indexOf('index')>-1){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
        });
    }

    // Post
    if(window.location.href.indexOf('index')>-1){
        var posts = [
            {
                title: "Prueba de Titulo 1",
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis reprehenderit.
                Commodi iste veniam fuga quia, culpa exercitationem molestias! Inventore perferendis maiores,
                quod distinctio vitae voluptates fuga optio saepe aliquid.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sapiente odit ipsam, totam commodi
                veritatis, ex a iure adipisci suscipit officiis quaerat! Repudiandae est excepturi, laborum
                accusamus eveniet nostrum ut.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolores quod, adipisci id beatae
                obcaecati deleniti illum facere accusamus illo recusandae impedit quidem eligendi at. Maxime aut
                eum voluptate laudantium?`
            },
            {
                title: "Prueba de Titulo 2",
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis reprehenderit.
                Commodi iste veniam fuga quia, culpa exercitationem molestias! Inventore perferendis maiores,
                quod distinctio vitae voluptates fuga optio saepe aliquid.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sapiente odit ipsam, totam commodi
                veritatis, ex a iure adipisci suscipit officiis quaerat! Repudiandae est excepturi, laborum
                accusamus eveniet nostrum ut.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolores quod, adipisci id beatae
                obcaecati deleniti illum facere accusamus illo recusandae impedit quidem eligendi at. Maxime aut
                eum voluptate laudantium?`
            },
            {
                title: "Prueba de Titulo 3",
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis reprehenderit.
                Commodi iste veniam fuga quia, culpa exercitationem molestias! Inventore perferendis maiores,
                quod distinctio vitae voluptates fuga optio saepe aliquid.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sapiente odit ipsam, totam commodi
                veritatis, ex a iure adipisci suscipit officiis quaerat! Repudiandae est excepturi, laborum
                accusamus eveniet nostrum ut.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolores quod, adipisci id beatae
                obcaecati deleniti illum facere accusamus illo recusandae impedit quidem eligendi at. Maxime aut
                eum voluptate laudantium?`
            },
            {
                title: "Prueba de Titulo 4",
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis reprehenderit.
                Commodi iste veniam fuga quia, culpa exercitationem molestias! Inventore perferendis maiores,
                quod distinctio vitae voluptates fuga optio saepe aliquid.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sapiente odit ipsam, totam commodi
                veritatis, ex a iure adipisci suscipit officiis quaerat! Repudiandae est excepturi, laborum
                accusamus eveniet nostrum ut.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolores quod, adipisci id beatae
                obcaecati deleniti illum facere accusamus illo recusandae impedit quidem eligendi at. Maxime aut
                eum voluptate laudantium?`
            }
            ,
            {
                title: "Prueba de Titulo 5",
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, officiis reprehenderit.
                Commodi iste veniam fuga quia, culpa exercitationem molestias! Inventore perferendis maiores,
                quod distinctio vitae voluptates fuga optio saepe aliquid.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sapiente odit ipsam, totam commodi
                veritatis, ex a iure adipisci suscipit officiis quaerat! Repudiandae est excepturi, laborum
                accusamus eveniet nostrum ut.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolores quod, adipisci id beatae
                obcaecati deleniti illum facere accusamus illo recusandae impedit quidem eligendi at. Maxime aut
                eum voluptate laudantium?`
            }
        ]
        


        posts.forEach((item) => {
            var post = `
        <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>

                <p>
                ${item.content}
                </p>
            <a href="#" class="button-more">Leer más</a>
        </article>
        
        
        
        `
            $("#posts").append(post)
        })

    }
    // Selector de tema
    var theme = $("#theme");

    if (localStorage.getItem("theme") == null) {
        // si no existe el key lo crea
        localStorage.setItem("theme", "css/green.css");
    }
    else {
        // si existe el key, carga su el tema
        theme.attr("href", localStorage.getItem("theme"));
    }


    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
        localStorage.setItem("theme", "css/green.css");
    });

    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
        localStorage.setItem("theme", "css/blue.css");
    });

    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
        localStorage.setItem("theme", "css/red.css");
    });


    // scroll arriba de la web 
    $(".subir").click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop: 0
        }, 500)
        return false
    })


    // login falso 
    $("#login form").submit(function(){
       var form_name = $("#form_name").val()
       localStorage.setItem("form_name", form_name)
    })

    var form_name = localStorage.getItem("form_name");
    if(form_name != null || form_name != undefined ){
        var about_parrafo=$("#about p")
        about_parrafo.html("<br><strong> Bienvenido, "+form_name+" </strong>")
        about_parrafo.append("<a href='#' id='logout'> Cerrar Sesión </a>")
        $("#login").hide

        $("#logout").click(function(){
            localStorage.clear();
            location.reload()
        })
    }

    if(window.location.href.indexOf('about')>-1){
        $("#acordeon").accordion()
    }


    if(window.location.href.indexOf('reloj')>-1){
        
        setInterval(function(){
            var reloj = moment().format("h:mm:ss")
            $("#reloj").html(reloj)
        }, 1000)
    }
    

    //Validacion 
    if(window.location.href.indexOf('contact')>-1){
        $("form input[name='date']").datepicker({
            dateFormat:'dd-mm-yy'
        })
        $.validate({
            lang:'es',
            errorMessagePosition:'top',
            scrollToTopOnError:true
        })
    }
})