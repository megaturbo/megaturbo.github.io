// shitty code incoming TODO: better

// global vars and datas
// ============================
var r = [3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 2, 2];
var r_i = -1;   // index
var r_bpm = 95;
var r_rate = 0.25;

var p_color = '#b0b0b0';
let SHOWS;

// functions wow
// ============================
function plome() {
  showShows();
}

function showShows() {
  // load json
  $.getJSON("js/shows.json", (shows) => {
    // compute past status
    const today = Date.now();
    today.setHours(0,0,0,0);
    shows.shows.map(show => {
      show.past = today > Date.parse(show.date);
      return show;
    });

    // compile and render shows template
    let source = $('#template-dates').html();
    let template = Handlebars.compile(source);
    let rendered = template(shows);
    $('#target-dates').html(rendered);
  })
}


function glow_title(){
    var p = $('#plome-title')
    p.css('color', p_color)
    p.css('font-size', '10em')

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


// main shit
$(function() {
  $(window).load(function() {
    plome();
    console.log("🥒'ed by @nichuguen & @megaturbo");
  });
});
