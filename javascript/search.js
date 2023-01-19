$(document).ready(function () {
    $('#myInput').on('keyup', function (s) {
        s.preventDefault();
        var keyword = $(this).val().toLowerCase();
        $('#show a').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1);

        });
    });
});
function button() {
    var btn = document.getElementById("Button");
    btn.disabled = false;
}