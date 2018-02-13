var r = [3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 2, 2];
var r_i = -1;   // index
var r_bpm = 95;
var r_rate = 0.25;

var p_color = '#303030'

function random_hue(){
    return 'rgb(' + Math.floor(255*Math.random()) + ','
    + Math.floor(255*Math.random()) + ','
    + Math.floor(255*Math.random()) + ')';
}

function glow_title(){
    var p = $('#plome-title')
    p.css('color', p_color)
    p.css('font-size', '12em')

    p.animate({
        color: '#f2f2f2',
        fontSize: '8em'
    }, 100, function (){
        // animation complete
    });
}

function make_it_glow(){
    glow_title()
    r_i += 1;
    console.log(r[r_i % r.length]);
    var duration = (r[r_i % r.length] * r_rate * 60 * 1000) / r_bpm;
    setTimeout(make_it_glow, duration);
}

// Smooth scroll animation
$(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

make_it_glow();
