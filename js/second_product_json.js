//second products
$(function () {
  $.ajax({
    url: "./json/smarket.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".sproduct_img").eq(i).append("<a href='sub.html'>" + "<img src='img_1/" + data[i].url + "'/>" + "</a>");
          $(".sproduct_img").eq(i).append("<span><a href='sub.html'>" + "<img src='img_1/" + data[i].cart + "'/>" + "</a></span>");
          //product introduct
          $(".sproduct_box").eq(i).append("<h5><a href='sub.html'>" + data[i].title + "</a></h5>");
          $(".sproduct_box").eq(i).append("<p><a href='sub.html'>" + data[i].price + "</a></p>");
          //img
          $(".sproduct_img img").attr("width", "100%");
          $(".sproduct_img img").attr("height", "100%");
          $(".sproduct_img img").attr("alt", "product img");
          $(".sproduct_img img").css({
            "transform": "scale(1)",
            "transition": "all 0.7s ease"
          });
          //img hover
          $(".second_product img").hover(function () {
            $(this).css("transform", "scale(1.03)",);
          }, function () {
            $(this).css("transform", "scale(1)");
          });
          //cart icon
          $(".sproduct_img span img").attr("width", "50px");
          $(".sproduct_img span img").attr("height", "50px");
          $(".sproduct_img span img").css({
            "position": "absolute",
            "bottom": "15px",
            "right": "15px"
          });
          //font attr
          $(".sproduct_box p").attr("width", "100%");
          //css
          $(".sproduct_box h5 a").css({
            "font-size": "14px",
            "display": "block",
            "color": "#333333",
            "marginTop": "15px",
            "padding": "3px"
          });
          $(".sproduct_box p").css({
            "font-weight": "bold",
            "font-size": "14px",
            "display": "inline",
            "color": "#FA622F",
            "line-height": "1.36",
            "padding": "3px"
          });
          $(".sproduct_box p a").css({
            "font-weight": "bold",
            "font-size": "14px",
            "font-weight": "900",
            "color": "#333333",
            "line-height": "1.36"
          });
        }
      }
    }
  });
});