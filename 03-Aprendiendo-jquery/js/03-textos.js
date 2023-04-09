$(document).ready(function(){
    
    reloadLinks();
    $('#add_button')
    .removeAttr('disabled')
    .click(function(){
        $('#menu').append('<li><a href="https://'+$("#add_link").val()+'.com"></a></li>'); 
        $("#add_link").val('')
        reloadLinks();
    })



   

   function reloadLinks(){
    $('a').each(function(index){
        var that = $(this)
        var enlace = that.attr("href")
        that.attr('target','_blank')
        that.removeAttr();
        that.text(enlace)
   });
   }




})