document.addEventListener('DOMContentLoaded', function () {
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
});