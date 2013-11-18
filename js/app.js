jQuery(document).ready(function($) {

    var nombre = $('#nombre');
    var comentario = $('#comentario');
    var comentarios = $('#comentarios');

    $('#nuevo-comentario').submit(function(event) {
        event.preventDefault();

        var modeloComentario = {
            nombre: nombre.val(),
            cuerpo: comentario.val()
        };

        var nuevoComentario = new App.ComentarioView({
            model: modeloComentario
        });

        comentarios.append(nuevoComentario.render().el);

        nombre.val('').focus();
        comentario.val('');

    });

    comentarios.on('click', '.close', function(){
        $(this).closest('.comentario').remove();
    });
});

var App = App || {};

App.ComentarioView = Backbone.View.extend({
    className: 'comentario',
    template: _.template($('#comentario-tpl').html()),
    render : function() {
        var html = this.template( this.model );
        this.$el.html( html );
        return this;
    }
});
