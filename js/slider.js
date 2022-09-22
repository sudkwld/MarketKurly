//slider
function prev() {
  $(".auto_slide li:last").prependTo(".auto_slide");
  $(".auto_slide").css({ marginLeft: -1920 });
  $(".auto_slide").stop().animate({ marginLeft: 0 }, 800);
}

function next() {
  $(".auto_slide").stop().animate({ marginLeft: -1920 }, function () {
    $(".auto_slide li:first").appendTo(".auto_slide");
    $(".auto_slide").css({ marginLeft: 0 });
  });
}

function slide() {
  $(".auto_slide").stop().animate({ marginLeft: -1920 }, function () {
    $(".auto_slide li:first").appendTo(".auto_slide");
    $(".auto_slide").css({ marginLeft: 0 });
  });
}

setInterval(slide, 4000);

$(".prev").click(function () {
  prev();
});
$(".next").click(function () {
  next();
});