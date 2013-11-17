jQuery(document).ready(function($) {

    var nombre = $('#nombre');
    var comentario = $('#comentario');
    var comentarios = $('#comentarios');

    $('#nuevo-comentario').submit(function(event) {
        event.preventDefault();

        var nombreHtml = $('<h4></h4>').text(nombre.val());
        var cuerpotHtml = $('<p></p>').text(comentario.val());

        var comentarioHtml = $('<div class="comentario"><button type="button" class="close">&times;</button></div>');

        comentarioHtml.append(nombreHtml);
        comentarioHtml.append(cuerpotHtml);

        comentarios.append(comentarioHtml);

        nombre.val('').focus();
        comentario.val('');

    });

    comentarios.on('click', '.close', function(){
        $(this).closest('.comentario').remove();
    });
});