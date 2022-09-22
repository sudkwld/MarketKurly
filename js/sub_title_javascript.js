//First title
let prevTitle = document.getElementById("prev_title");
prevTitle.innerHTML = "RELATED PRODUCT?";
prevTitle.style.color = "#000";
prevTitle.style.fontSize = "15px";
prevTitle.style.fontFamily = "noto sans,malgun gothic,AppleGothic,dotum";
prevTitle.style.lineHeight = "1.15";
prevTitle.style.fontWeight = "900";
prevTitle.style.width = "100%";
prevTitle.style.padding = "30px 0 10px 0";
//product1 - article
let articleOne = document.getElementsByTagName("article")[0];
articleOne.style.width = "1010px";
articleOne.style.height = "auto";
articleOne.style.textAlign = "center";
articleOne.style.paddingBottom = "20px";
articleOne.style.margin = "0 auto";
articleOne.style.display = "flex";
articleOne.style.flexFlow = "row wrap";
articleOne.style.justifyContent = "center";
//first product
let prevBox = document.getElementsByClassName("prev_box");

for (let i = 0; i < prevBox.length; i++) {
  prevBox[i].style.boxSizing = "border-box";
  prevBox[i].style.width = "178px";
  prevBox[i].style.height = "320px";
  prevBox[i].style.boxSizing = "border-box";
  prevBox[i].style.display = "inline-block";
  prevBox[i].style.textAlign = "left";
  prevBox[i].style.margin = "10px 10px";
  prevBox[i].style.border = "1px solid #ddd"
}
//first product - img
let prevImg = document.getElementsByClassName("prev_img");

for (let i = 0; i < prevBox.length; i++) {
  prevImg[i].style.width = "100%";
  prevImg[i].style.height = "228px";
  prevImg[i].style.backgroundColor = "red";
}