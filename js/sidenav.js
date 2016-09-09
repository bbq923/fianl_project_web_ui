$(document).ready(function() {
    $('#music-list').on('click', '.navigator', function(event) {
        event.preventDefault();
        var $detail = $(this).next();
        $detail.toggle();
    })
})