/* sticky menu */
$(".section-features").waypoint(function(direction){
    if ( direction == 'down' ){
        $('#menu').addClass('sticky');
    }
    else{
        $('#menu').removeClass('sticky');
    }
},{
    offset: '10%'
});

/* scroll */
$('.scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop: $('#plans').offset().top}, 1000);
});

$('.scroll-to-start').click(function(){
    $('html, body').animate({scrollTop: $('#features').offset().top}, 1000);
});

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
});

/* animations */
$('.wp-1').waypoint(function(direction){
    $('.wp-1').addClass('animate__animated animate__fadeIn');
},{
    offset: '60%'
});

$('.wp-2').waypoint(function(direction){
    $('.wp-2').addClass('animate__animated animate__bounceInUp');
},{
    offset: '60%'
});

$('.wp-3').waypoint(function(direction){
    $('.wp-3').addClass('animate__animated animate__fadeIn');
},{
    offset: '60%'
});

$('.wp-4').waypoint(function(direction){
    $('.wp-4').addClass('animate__animated animate__pulse');
},{
    offset: '60%'
});

/* mobile-menu */
$('#mobile-menu').click(function(){
    var largura = $(window).width();
    var logo = $('.logo')
    var mobileMenu = $('#mobile-menu i');

    if ( mobileMenu.hasClass('fa-bars') ){
        mobileMenu.removeClass('fa-bars');
        mobileMenu.addClass('fa-times');
    }
    else{
        mobileMenu.addClass('fa-bars');
        mobileMenu.removeClass('fa-times');
    }

    if ( largura <= 360){

        if ( logo.css('display') == 'block' ) {
            logo.css('display','none');
        }
        else {
            setTimeout(function(){
                logo.css('display','block');
            },200)
        }
    }

    $('#nav-bar').slideToggle(200);
});

