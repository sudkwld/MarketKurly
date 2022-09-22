//third products
$(function () {
  $.ajax({
    url: "./json/market.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          //market products third
          //img
          $(".img_wrap").eq(i).append("<a href='sub.html'>" + "<img src='img_1/" + data[i].url + "'/>" + "</a>");
          $(".img_wrap").eq(i).append("<span><a href='sub.html'>" + "<img src='img_1/" + data[i].cart + "'/>" + "</a></span>")
          //상품설명
          $(".product").eq(i).append("<h5><a href='sub.html'>" + data[i].title + "</a></h5>");
          $(".product").eq(i).append("<p>" + data[i].sale + "</p>");
          $(".product").eq(i).append("<p><a href='sub.html'>" + data[i].price + "</a></p>");
          $(".product").eq(i).append("<span><del>" + data[i].xprice + "</del></span>");
          //img
          $(".img_wrap img").attr("width", "100%");
          $(".img_wrap img").attr("height", "100%");
          $(".img_wrap img").attr("alt", "product img");
          $(".img_wrap img").css({ "transform": "scale(1)", "transition": "all 0.7s ease" });
          //img hover
          $(".product img").hover(function () {
            $(this).css("transform", "scale(1.03)",);
          }, function () {
            $(this).css("transform", "scale(1)");
          });
          //cart icon
          $(".img_wrap span img").attr("width", "50px");
          $(".img_wrap span img").attr("height", "50px");
          $(".img_wrap span img").css({
            "position": "absolute",
            "bottom": "15px",
            "right": "15px"
          });
          //font attr
          $(".product p").attr("width", "100%");
          //css
          $(".product h5 a").css({
            "font-size": "14px",
            "display": "block",
            "color": "#333333",
            "marginTop": "15px",
            "padding": "3px"
          });
          $(".product p").css({
            "font-weight": "bold",
            "font-size": "14px",
            "display": "inline",
            "color": "#FA622F",
            "line-height": "1.36",
            "padding": "3px"
          });
          $(".product p a").css({
            "font-weight": "bold",
            "font-size": "14px",
            "font-weight": "900",
            "color": "#333333",
            "line-height": "1.36"
          });
          $(".product span").css({
            "font-size": "12px",
            "display": "block",
            "font-weight": "400",
            "line-height": "1.45",
            "color": "#999999",
            "padding": "3px"
          });

        }
      }
    }
  });
});

$(function () {
  $.ajax({
    url: "./json/kurly_recipe.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".recipe_img").eq(i).append("<a href='sub.html'>" + "<img src='img_recipe/" + data[i].url + "'/>" + "</a>");
          //recipe introduce
          $(".recipe_box").eq(i).append("<h5><a href='sub.html'>" + data[i].title + "</a></h5>");
          $(".recipe_box").eq(i).append("<p><a href='sub.html'>" + data[i].subtitle + "</a></p>");
          //recipe img
          $(".recipe_img img").attr("width", "100%");
          $(".recipe_img img").attr("height", "100%");
          $(".recipe_img img").attr("alt", "recipe_img");
          $(".recipe_img img").attr("background-color", "#000")
          //recipe img hover
          $(".recipe_img img").hover(function () {
            $(this).css({ "opacity": "0.6", "transition": "all 0.3s ease" });
          }, function () {
            $(this).css("opacity", "1");
          });
          //recipe fontcss
          $(".recipe_box h5 a").css({
            "font-size": "15px",
            "line-height": "40px",
          });
          $(".recipe_box p a").css({
            "color": "#333"
          });
        }
      }
    }
  });
});