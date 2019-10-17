
$('.texto').hide();

var s1 = $('.seta1');

$(function(){
    $('.item1').click(function() {
    $('.texto1').toggle('slow');
    $('.texto2').hide();
    $('.texto3').hide();
    $('.texto4').hide();
    $('.texto5').hide();
    $('.texto6').hide();
    $('.seta1').attr('src', 'img/arrow-up01.png');
    $('.seta2').attr('src', 'img/arrow-down01.png');
    $('.seta3').attr('src', 'img/arrow-down01.png');
    $('.seta4').attr('src', 'img/arrow-down01.png');
    $('.seta5').attr('src', 'img/arrow-down01.png');
    $('.seta6').attr('src', 'img/arrow-down01.png');
    });

    $('.item2').click(function() {
    $('.texto2').toggle('slow');
    $('.texto1').hide();
    $('.texto3').hide();
    $('.texto4').hide();
    $('.texto5').hide();
    $('.texto6').hide();
    $('.seta2').attr('src', 'img/arrow-up01.png');
    $('.seta1').attr('src', 'img/arrow-down01.png');
    $('.seta3').attr('src', 'img/arrow-down01.png');
    $('.seta4').attr('src', 'img/arrow-down01.png');
    $('.seta5').attr('src', 'img/arrow-down01.png');
    $('.seta6').attr('src', 'img/arrow-down01.png');
    });

    $('.item3').click(function() {
    $('.texto3').toggle('slow');
    $('.texto1').hide();
    $('.texto2').hide();
    $('.texto4').hide();
    $('.texto5').hide();
    $('.texto6').hide();
    $('.seta3').attr('src', 'img/arrow-up01.png');
    $('.seta2').attr('src', 'img/arrow-down01.png');
    $('.seta1').attr('src', 'img/arrow-down01.png');
    $('.seta4').attr('src', 'img/arrow-down01.png');
    $('.seta5').attr('src', 'img/arrow-down01.png');
    $('.seta6').attr('src', 'img/arrow-down01.png');
    });

    $('.item4').click(function() {
    $('.texto4').toggle('slow');
    $('.texto1').hide();
    $('.texto2').hide();
    $('.texto3').hide();
    $('.texto5').hide();
    $('.texto6').hide();
    $('.seta4').attr('src', 'img/arrow-up01.png');
    $('.seta2').attr('src', 'img/arrow-down01.png');
    $('.seta3').attr('src', 'img/arrow-down01.png');
    $('.seta1').attr('src', 'img/arrow-down01.png');
    $('.seta5').attr('src', 'img/arrow-down01.png');
    $('.seta6').attr('src', 'img/arrow-down01.png');
    });   

    $('.item5').click(function() {
        $('.texto5').toggle('slow');
        $('.texto1').hide();
        $('.texto2').hide();
        $('.texto3').hide();
        $('.texto4').hide();
        $('.texto6').hide();
        $('.seta5').attr('src', 'img/arrow-up01.png');
        $('.seta2').attr('src', 'img/arrow-down01.png');
        $('.seta3').attr('src', 'img/arrow-down01.png');
        $('.seta1').attr('src', 'img/arrow-down01.png');
        $('.seta4').attr('src', 'img/arrow-down01.png');
        $('.seta6').attr('src', 'img/arrow-down01.png');
        });

        $('.item6').click(function() {
            $('.texto6').toggle('slow');
            $('.texto1').hide();
            $('.texto2').hide();
            $('.texto3').hide();
            $('.texto4').hide();
            $('.texto5').hide();
            $('.seta5').attr('src', 'img/arrow-up01.png');
            $('.seta2').attr('src', 'img/arrow-down01.png');
            $('.seta3').attr('src', 'img/arrow-down01.png');
            $('.seta1').attr('src', 'img/arrow-down01.png');
            $('.seta4').attr('src', 'img/arrow-down01.png');
            $('.seta5').attr('src', 'img/arrow-down01.png');
            });
});