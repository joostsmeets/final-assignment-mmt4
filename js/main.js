// dark/light toggle
$('#toggle').click(function(event){
    event.preventDefault();

    if($(this).hasClass('dark')){
        $(this).removeClass('dark');
        $('body').css({'background-color':'white'});
        $('.grid-wrap h2').css({'color':'#CC0085'});
        $('.grid-wrap p').css({'color':'#CC0085'});
        $('nav').css({'background-color':'white', 'color':'black'});
        $('header').css({'background-image':'url(img/hero@2x.png)'});
        $('.logo').attr('src', 'img/logo@2x.png');
        $('.thumb').css({'background-color':'#F4F2FF', 'color': '#CC0085'});
        $('.leer').attr({'src':'/img/leer.svg'});
        $('.codeer').attr({'src':'img/codeer.svg'});
        $('.speel').attr({'src':'img/speel.svg'});
        $('#accordion h3').css({'outline':'1px solid #CC0085', 'color':"#CC0085"});
        $('.contactBtn').css({'background-color':'#CC0085'});
        $('.mailBtn').css({'background-color':'#CC0085'});
        $('.sliderContent').css({'background-color':'#F4F2FF'});
        $('.sliderContent h3').css({'color':'#CC0085'});
        $('.slick-next:before').css({'color':'#CC0085'});
        $('footer').css({'background-image':'url(img/footer-img@2x.png)'});
        $('footer a').css({'color':'#CC0085'});
        $('.slick-dots li.slick-active button:before').css({'color':'#CC0085'});
        $('.buitenkant-knop').css({'background-color':'#FFAFE3'});
        $('.binnenkant-knop').css({'float':'left'});
    }else{
        ($(this).addClass('dark'))
        $('body').css({'background-color':'black'});
        $('.grid-wrap h2').css({'color':'white'});
        $('.grid-wrap p').css({'color':'white'});
        $('nav').css({'background-color':'blue', 'color':'white'});
        $('header').css({'background-image':'url(img/hero-wit@2x.png)'});
        $('.logo').attr('src', 'img/logo-wit@2x.png');
        $('.thumb').css({'background-color':'blue', 'color': 'white'});
        $('.leer').attr({'src':'img/leer-wit@2x.png'});
        $('.codeer').attr({'src':'img/codeer-wit@2x.png'});
        $('.speel').attr({'src':'img/speel-wit@2x.png'});
        $('#accordion h3').css({'outline':'1px solid blue', 'color':"white"});
        $('.contactBtn').css({'background-color':'blue'});
        $('.mailBtn').css({'background-color':'#0076FF'});
        $('.sliderContent').css({'background-color':'blue'});
        $('.sliderContent h3').css({'color':'white'});
        $('.slick-next:before').css({'color':'white'});
        $('footer').css({'background-image':'url(img/footer-img-blauw@2x.png)'});
        $('footer a').css({'color':'blue'});
        $('.slick-dots li.slick-active button:before').css({'color':'blue'});
        $('.buitenkant-knop').css({'background-color':'#0076FF'});
        $('.binnenkant-knop').css({'float':'right'});
        $('.play-button').attr('src', 'img/play-btn-dark.png');
        $('.backward-btn').attr('src', 'img/backward-btn-dark.png');
        $('.forward-btn').attr('src', 'img/forward-btn-dark.png');
    }
})
 
 
 // accordion
 let player1 = videojs('video1');
 let player2 = videojs('video2');
 let player3 = videojs('video3');
 let player4 = videojs('video4');
 let player5 = videojs('video5');

 player1.fluid('true');
 player2.fluid('true');
 player3.fluid('true');
 player4.fluid('true');
 player5.fluid('true');

 $(function () {
     $("#accordion").accordion({
         animate: 220,
         heightStyle: "content",
         collapsible: true
     });
 });

 $(function () {
     $('.ui-accordion-content').css({ 'padding': '0' });
 });

 $(function () {
     $('.ui-state-default').css({ 'background': 'none', 'border': 'none' });
 });

//  play/pause knoppen
var player01 = videojs('video1');
$('.play01').click(function(event){
   event.preventDefault();
   if($(this).hasClass('vjs-paused')){
       $(this).removeClass('vjs-paused');
       $('.play-button').attr({'src':'../img/play-btn.png'});
       player01.pause();
   }else{
            ($(this).addClass('vjs-paused'))
            $('.play-button').attr({'src':'../img/pause.svg'});
            player01.play();
   }
});
var player02 = videojs('video2');
$('.play02').click(function(event){
   event.preventDefault();
   if($(this).hasClass('vjs-paused')){
       $(this).removeClass('vjs-paused');
       $('.play-button').attr({'src':'../img/play-btn.png'});
       player02.pause();
   }else{
            ($(this).addClass('vjs-paused'))
            $('.play-button').attr({'src':'../img/pause.svg'});
            player02.play();
   }
});
var player03 = videojs('video3');
$('.play03').click(function(event){
   event.preventDefault();
   if($(this).hasClass('vjs-paused')){
       $(this).removeClass('vjs-paused');
       $('.play-button').attr({'src':'../img/play-btn.png'});
       player03.pause();
   }else{
            ($(this).addClass('vjs-paused'))
            $('.play-button').attr({'src':'../img/pause.svg'});
            player03.play();
   }
});
var player04 = videojs('video4');
$('.play04').click(function(event){
   event.preventDefault();
   if($(this).hasClass('vjs-paused')){
       $(this).removeClass('vjs-paused');
       $('.play-button').attr({'src':'../img/play-btn.png'});
       player04.pause();
   }else{
            ($(this).addClass('vjs-paused'))
            $('.play-button').attr({'src':'../img/pause.svg'});
            player04.play();
   }
});
var player05 = videojs('video5');
$('.play05').click(function(event){
   event.preventDefault();
   if($(this).hasClass('vjs-paused')){
       $(this).removeClass('vjs-paused');
       $('.play-button').attr({'src':'../img/play-btn.png'});
       player05.pause();
   }else{
            ($(this).addClass('vjs-paused'))
            $('.play-button').attr({'src':'../img/pause.svg'});
            player05.play();
   }
});

// forward & backward knoppen
$(".backward01").click(function (){
    event.preventDefault();
    player01.currentTime(player01.currentTime() - 5);
});
 $(".forward01").click(function () {
    event.preventDefault();
    player01.currentTime(player01.currentTime() + 5);
});
$(".backward02").click(function (){
    event.preventDefault();
    player02.currentTime(player02.currentTime() - 5);
});
 $(".forward02").click(function () {
    event.preventDefault();
    player02.currentTime(player02.currentTime() + 5);
});
$(".backward03").click(function (){
    event.preventDefault();
    player03.currentTime(player03.currentTime() - 5);
});
 $(".forward03").click(function () {
    event.preventDefault();
    player03.currentTime(player03.currentTime() + 5);
});
$(".backward04").click(function (){
    event.preventDefault();
    player04.currentTime(player04.currentTime() - 5);
});
 $(".forward04").click(function () {
    event.preventDefault();
    player04.currentTime(player04.currentTime() + 5);
});
$(".backward05").click(function (){
    event.preventDefault();
    player05.currentTime(player05.currentTime() - 5);
});
 $(".forward05").click(function () {
    event.preventDefault();
    player05.currentTime(player05.currentTime() + 5);
});


 // slick
 $(".regular").slick({
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
      ]
 });


//  modal dialog popup

var videowrap1 = $('#video1')
player01.ready(function(){
    
    player01.on('timeupdate', function(){
        var time = player01.currentTime();
        var duration = player01.duration();
        if (time >= duration){
            console.log('klaar');
            videowrap1.append('<div class="done"><span class="kruisje">&times;</span><p>De video is af!</p></div>');
        }
        $('.kruisje').click(function(){
            $('.done').css({'display': 'none'});
        })
    })
});

var videowrap2 = $('#video2')
player02.ready(function(){
    
    player02.on('timeupdate', function(){
        var time = player02.currentTime();
        var duration = player02.duration();
        if (time >= duration){
            console.log('klaar');
            videowrap2.append('<div class="done"><span class="kruisje">&times;</span><p>De video is af!</p></div>');
        }
        $('.kruisje').click(function(){
            $('.done').css({'display': 'none'});
        })
    })
});

var videowrap3 = $('#video3')
player03.ready(function(){
    
    player03.on('timeupdate', function(){
        var time = player03.currentTime();
        var duration = player03.duration();
        if (time >= duration){
            console.log('klaar');
            videowrap3.append('<div class="done"><span class="kruisje">&times;</span><p>De video is af!</p></div>');
        }
        $('.kruisje').click(function(){
            $('.done').css({'display': 'none'});
        })
    })
});

var videowrap4 = $('#video4')
player05.ready(function(){
    
    player04.on('timeupdate', function(){
        var time = player04.currentTime();
        var duration = player04.duration();
        if (time >= duration){
            console.log('klaar');
            videowrap4.append('<div class="done"><span class="kruisje">&times;</span><p>De video is af!</p></div>');
        }
        $('.kruisje').click(function(){
            $('.done').css({'display': 'none'});
        })
    })
});

var videowrap5 = $('#video5')
player05.ready(function(){
    
    player05.on('timeupdate', function(){
        var time = player05.currentTime();
        var duration = player05.duration();
        if (time >= duration){
            console.log('klaar');
            videowrap5.append('<div class="done"><span class="kruisje">&times;</span><p>De video is af!</p></div>');
        }
        $('.kruisje').click(function(){
            $('.done').css({'display': 'none'});
        })
    })
});




