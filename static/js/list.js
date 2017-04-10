$(function() {
    $('#tab .title h4').click(function() {
        $('#tab .title h4').removeClass('active')
        $(this).addClass('active')
        $('#tab .title h4').css('color', '#888');
        $(this).css('color', '#e58c7c');
        $('#tab .content ul').css('display', 'none');
        $('#tab .content ul').eq($(this).index()).css('display', 'block');
    })
})
