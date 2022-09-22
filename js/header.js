//header 메뉴바 mouseenter mouseout
$(function () {
  $(".nav_category").mouseenter(function () {
    $(this).find(".sub_category").stop().fadeIn();
  }).mouseleave(function () {
    $(".sub_category").stop().hide();
  });
});

$(function () {
  $(".sub_category>li").mouseenter(function () {
    $(this).find(".sub_child").stop().fadeIn();
  }).mouseleave(function () {
    $(".sub_child").stop().hide();
  });
});