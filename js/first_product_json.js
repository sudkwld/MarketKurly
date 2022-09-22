//first-product
$(function () {
  $.ajax({
    url: "./json/first_product.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".img_wrap_first").eq(i).append("<a href='sub.html'>" + "<img src='img_1/" + data[i].url + "'/>" + "</a>");
          $(".img_wrap_first").eq(i).append("<span><a href='sub.html'>" + "<img src='img_1/" + data[i].cart + "'/>" + "</a></span>");
          //product introduct
          $(".first_product").eq(i).append("<h5><a href='sub.html'>" + data[i].title + "</a></h5>");
          $(".first_product").eq(i).append("<p>" + data[i].sale + "</p>");
          $(".first_product").eq(i).append("<p><a href='sub.html'>" + data[i].price + "</a></p>");
          $(".first_product").eq(i).append("<span><del>" + data[i].xprice + "</del></span>");
          //img
          $(".img_wrap_first img").attr("width", "100%");
          $(".img_wrap_first img").attr("height", "100%");
          $(".img_wrap_first img").attr("alt", "product img");
          $(".img_wrap_first img").css({
            "transform": "scale(1)",
            "transition": "all 0.7s ease"
          });
          //img hover
          $(".first_product img").hover(function () {
            $(this).css("transform", "scale(1.03)",);
          }, function () {
            $(this).css("transform", "scale(1)");
          });
          //cart icon
          $(".img_wrap_first span img").attr("width", "50px");
          $(".img_wrap_first span img").attr("height", "50px");
          $(".img_wrap_first span img").css({
            "position": "absolute",
            "bottom": "15px",
            "right": "15px"
          });
          //font attr
          $(".first_product p").attr("width", "100%");
          //css
          $(".first_product h5 a").css({
            "font-size": "14px",
            "display": "block",
            "color": "#333333",
            "marginTop": "15px",
            "padding": "3px"
          });
          $(".first_product p").css({
            "font-weight": "bold",
            "font-size": "14px",
            "display": "inline",
            "color": "#FA622F",
            "line-height": "1.36",
            "padding": "3px"
          });
          $(".first_product p a").css({
            "font-weight": "bold",
            "font-size": "14px",
            "font-weight": "900",
            "color": "#333333",
            "line-height": "1.36"
          });
          $(".first_product span").css({
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