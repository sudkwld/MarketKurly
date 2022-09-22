$(function () {
  $.ajax({
    url: "./json/sub_product.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".prev_img").eq(i).append("<a href='sub.html'>" + "<img src='img_sub/" +
            data[i].url + "'/>" + "</a>");
          //product introduce
          $(".prev_box").eq(i).append("<h5><a href='sub.html'>" + data[i].title +
            "</a></h5>");
          $(".prev_box").eq(i).append("<p><a href='sub.html'>" + data[i].price +
            "</a></p>");
          //img
          $(".prev_img img").attr("width", "100%");
          $(".prev_img img").attr("height", "100%");
          $(".prev_img img").attr("alt", "product img");
          //font attr
          $(".sproduct_box p").attr("width", "100%");
          //css
          $(".prev_box h5 a").css({
            "font-size": "14px",
            "display": "block",
            "color": "#333333",
            "marginTop": "15px",
            "padding": "0 10px"
          });
          $(".prev_box p").css({
            "font-weight": "bold",
            "font-size": "14px",
            "display": "inline",
            "color": "#FA622F",
            "line-height": "1.36",
          });
          $(".prev_box p a").css({
            "font-weight": "bold",
            "font-size": "14px",
            "font-weight": "900",
            "color": "#333333",
            "line-height": "1.36",
            "padding": "0 10px"
          });
        }
      }
    }
  });
});