document.addEventListener('DOMContentLoaded', function () {
    // Cerrar los primeros tres etiquetas <details> y abrir la ultima
    var details = document.querySelectorAll('.prin');
    var i = 0;
    details.forEach(function(detail) {
        if (i < 3) {
            detail.removeAttribute('open');
        } else {
            detail.setAttribute('open', '');
        }
        i++;
    });

    // Generamos el contenido del menu dinamicamente basandose en el contenido
    // de las etiquetas <details>

});