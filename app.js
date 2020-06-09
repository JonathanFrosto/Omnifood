$(".section-features").waypoint(function(direction){
    if ( direction == 'down' ){
        $('#menu').addClass('sticky');
    }
    else{
        $('#menu').removeClass('sticky');
    }
});