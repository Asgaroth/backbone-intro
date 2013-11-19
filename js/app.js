jQuery(document).ready(function($) {
    var blog = new App.BlogView();
});

var App = App || {};

App.BlogView = Backbone.View.extend({
    el: '#blogapp',

    events: {
        'submit #nuevo-comentario': 'crearComentario',
        'click .close': 'eliminarComentario'
    },

    initialize : function() {
        this.nombre = this.$('#nombre');
        this.comentario = this.$('#comentario');
        this.comentarios = this.$('#comentarios');
    },

    crearComentario : function(e) {
        e.preventDefault();

        var modeloComentario = {
            nombre: this.nombre.val(),
            cuerpo: this.comentario.val()
        };

        var nuevoComentario = new App.ComentarioView({
            model: modeloComentario
        });

        this.comentarios.append(nuevoComentario.render().el);

        this.nombre.val('').focus();
        this.comentario.val('');
    },

    eliminarComentario : function(e) {
        $(e.currentTarget).closest('.comentario').remove();
    }
});

App.ComentarioView = Backbone.View.extend({
    className: 'comentario',
    template: _.template($('#comentario-tpl').html()),
    render : function() {
        var html = this.template( this.model );
        this.$el.html( html );
        return this;
    }
});