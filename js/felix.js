/**
 * Created by felixhornoiu on 12/3/15.
 */




// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {

  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });

  var pauseButton = document.getElementById("stop");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });

}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);













/** replace

$('img').click(function(){
        video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
        $(this).replaceWith(video);
    }); */

// Variables
var viewport = $(window),
    root = $('html'),
    maxScroll;

// Bind events to window
viewport.on({
  scroll: function() {
    // Grab scroll position
    var scrolled = viewport.scrollTop();

    /**
     * Calculate our factor, setting it as the root `font-size`.
     *
     * Our factor is calculated by multiplying the ratio of the page scrolled by our base factor. The higher the base factor, the larger the parallax effect.
     */
    root.css({ fontSize: (scrolled / maxScroll) * 50 });
  },
  resize: function() {
    // Calculate the maximum scroll position
    maxScroll = root.height() - viewport.height();
  }
}).trigger('resize');

$(document).ready(function() {
  $('#circle').on('click', function() {

    if($('#circle').hasClass('back')) {
      $(this).removeClass('back')
    }

    $(this).addClass('click');
    $('#circle').css('cursor', 'default');

    setTimeout(function() {
      $('.bar').css('opacity','0');
    }, 250)

    setTimeout(function() {
      $('#menu').css('display','block');
    }, 300)
  });

  $('#back').on('click', function() {
    $('#circle').removeClass('click');
    $('#circle').addClass('back');
    $('#menu').css('display', 'none');
    $('#circle').css('cursor', 'pointer');

    setTimeout(function() {
      $('.bar').css('opacity', '1');
    }, 100)
  });
});

