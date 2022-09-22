//timer zone
$(function () {
  $.ajax({
    url: "./json/timer.json",
    dataType: "json",
    success: function (data) {
      if (data.length > 0) {
        for (var i in data) {
          $(".timer_img").eq(i).append("<a href='sub.html'>" + "<img src='img_1/" + data[i].url + "'/>" + "</a>");
          //product introduct
          $(".timer_box").eq(i).append("<h4><a href='sub.html'>" + data[i].explain + "</a></h4>");
          $(".timer_box").eq(i).append("<span><a href='sub.html'>" + data[i].sale + "</a></span>");
          $(".timer_box").eq(i).append("<p><a href='sub.html'>" + data[i].price + "</a></p>");
          //img
          $(".timer_img img").attr("width", "100%");
          $(".timer_img img").attr("height", "100%");
          $(".timer_img img").attr("alt", "timer img");
          //img css
          $(".timer_img img").css("object-fit", "cover");
          //font css
          $(".timer_box h4").css({
            "width": "190px",
            "margin-top": "20px",
            "padding-bottom": "30px"
          });
          $(".timer_box h4 a").css({
            "font-size": "14px"
          });
          $(".timer_box span a").css({
            "position": "absolute",
            "bottom": "30px",
            "left": "90px",
            "font-size": "15px",
            "color": "red",
            "font-weight": "900"
          });
          $(".timer_box p a").css({
            "position": "absolute",
            "bottom": "30px",
            "right": "90px",
            "font-size": "15px",
            "color": "#000",
            "font-weight": "900"
          });
        }
      }
    }
  });
});