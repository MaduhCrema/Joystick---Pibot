$(function(){
    var divMensagem = $("#mensagem");

    //cada botao terá um evento click para enviar uma requisicao
    $("angle").onchange(function(){
        var angle = $(this).val();
        enviaPostAjax(angle);
    });
z
    //funcao da requisiciao ajax
    function enviaPostAjax(angle) {
        $.post("/", {'angulo': angle}, function() {
            console.log("angulo " + angle + " enviado com sucesso!")
        });
    }



    //eventos das teclas
   /* $(document).keydown(function(event){
        if(event.key == "a"){
            // Teclou A
            enviaPostAjax("a");
        }
        else if(event.key == "w"){
            // Teclou W
            enviaPostAjax("w");
        }
        else if(event.key == "s"){
            // Teclou S
            enviaPostAjax("s");
        }
        else if(event.key == "d"){
            // Teclou D
            enviaPostAjax("d");
        }
        else if(event.key == "q"){
            // Teclou q
            enviaPostAjax("q");
        }
    });*/
    
    
  //  $(document).mousemove(function(event){
  //          enviaPostAjax(angle);
  //      })

    //enviando a cada 2s uma requisicao para pegar o valor da distancia 
//    setInterval(function(){
//        $.get("/distancia",function(resposta){
//            $("#distancia").text(resposta);
//        })
//    }, 2000);//2s


});
