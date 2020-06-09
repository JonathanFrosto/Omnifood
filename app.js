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