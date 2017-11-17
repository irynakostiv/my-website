/*global $*/
$('form input[type="submit"]').click(sendForm);
function sendForm(e) {
    const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/kostivira@ukr.net", 
        method: "POST",
        data: {
            name: $('#name').val(),
            mail: $('#mail').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
    .done(function() {
        $('form')[0].reset();
        $('#msg').html('Дякуємо за Ваш відгук!');
    })
    .fail(function() {
        $('#msg').html('Вибачте, сталась помилка!3');
    });
}