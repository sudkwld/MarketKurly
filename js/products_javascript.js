document.body.style.backgroundColor = "#fff";
    //main
    //timer
    let timerWrap = document.getElementById("timer_wrap");
    timerWrap.style.width = "1200px";
    timerWrap.style.height = "500px"
    timerWrap.style.margin = "0 auto";
    timerWrap.style.display = "flex";
    timerWrap.style.flexFlow = "row wrap";
    timerWrap.style.justifyContent = "space-between";
    timerWrap.style.alignItems = "center";

    //First title
    let firstTitle = document.getElementById("first_title");
    firstTitle.innerHTML = "이 상품 어때요?";
    firstTitle.style.color = "#333333";
    firstTitle.style.fontSize = "28px";
    firstTitle.style.lineHeight = "1.15";
    firstTitle.style.letterSpacing = "-0.5px"
    firstTitle.style.fontWeight = "600";
    firstTitle.style.textAlign = "center";
    firstTitle.style.width = "100%";
    firstTitle.style.margin = "50px 0 30px 0";
    //product1 - article
    let articleOne = document.getElementsByTagName("article")[0];
    articleOne.style.width = "1200px";
    articleOne.style.height = "auto";
    articleOne.style.textAlign = "center";
    articleOne.style.margin = "0 auto";
    articleOne.style.display = "flex";
    articleOne.style.flexFlow = "row wrap";
    articleOne.style.justifyContent = "center";
    //first product
    let productsFirst = document.getElementsByClassName("first_product");

    for (let i = 0; i < productsFirst.length; i++) {
      productsFirst[i].style.boxSizing = "border-box";
      productsFirst[i].style.width = "270px";
      productsFirst[i].style.height = "460px";
      productsFirst[i].style.boxSizing = "border-box";
      productsFirst[i].style.margin = "15px 10px";
      productsFirst[i].style.display = "inline-block";
      productsFirst[i].style.textAlign = "left";
      productsFirst[i].style.backgroundColor = "#fff";
    }
    //first product - img
    let imgWrapFirst = document.getElementsByClassName("img_wrap_first");

    for (let i = 0; i < productsFirst.length; i++) {
      imgWrapFirst[i].style.width = "100%";
      imgWrapFirst[i].style.height = "340px"
      imgWrapFirst[i].style.overflow = "hidden";
      imgWrapFirst[i].style.position = "relative";
    }
    //Second title
    let secondTitle = document.getElementById("second_title");
    secondTitle.innerHTML = "수고했어 오늘도 >";
    secondTitle.style.color = "#333333";
    secondTitle.style.fontSize = "28px";
    secondTitle.style.lineHeight = "1.15";
    secondTitle.style.letterSpacing = "-0.5px"
    secondTitle.style.fontWeight = "600";
    secondTitle.style.textAlign = "center";
    secondTitle.style.margin = "100px 0 30px 0";
    secondTitle.style.width = "100%";
    //second - article
    let articleTwo = document.getElementsByTagName("article")[1];
    articleTwo.style.width = "1200px";
    articleTwo.style.height = "auto";
    articleTwo.style.textAlign = "center";
    articleTwo.style.margin = "0 auto";
    articleTwo.style.display = "flex";
    articleTwo.style.flexFlow = "row wrap";
    articleTwo.style.justifyContent = "center";
    //second product
    let productsSecond = document.getElementsByClassName("sproduct_box");

    for (let i = 0; i < productsSecond.length; i++) {
      productsSecond[i].style.boxSizing = "border-box";
      productsSecond[i].style.width = "270px";
      productsSecond[i].style.height = "460px";
      productsSecond[i].style.boxSizing = "border-box";
      productsSecond[i].style.margin = "15px 10px";
      productsSecond[i].style.display = "inline-block";
      productsSecond[i].style.textAlign = "left";
      productsSecond[i].style.backgroundColor = "#fff";
    }
    //second product - img
    let imgWrapSecond = document.getElementsByClassName("sproduct_img");

    for (let i = 0; i < productsSecond.length; i++) {
      imgWrapSecond[i].style.width = "100%";
      imgWrapSecond[i].style.height = "340px"
      imgWrapSecond[i].style.overflow = "hidden";
      imgWrapSecond[i].style.position = "relative";
    }

    //product third - title
    let title = document.getElementById("title");
    title.innerHTML = "놓치면 후회할 가격 > ";
    title.style.color = "#333333";
    title.style.fontSize = "28px";
    title.style.lineHeight = "1.15";
    title.style.letterSpacing = "-0.5px"
    title.style.fontWeight = "600";
    title.style.textAlign = "center";
    title.style.margin = "100px 0 30px 0";
    title.style.width = "100%";
    //product third - article
    let articleThree = document.getElementsByTagName("article")[2];
    articleThree.style.width = "1200px";
    articleThree.style.height = "auto";
    articleThree.style.textAlign = "center";
    articleThree.style.margin = "0 auto";
    articleThree.style.display = "flex";
    articleThree.style.flexFlow = "row wrap";
    articleThree.style.justifyContent = "center";
    //third product
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
      products[i].style.boxSizing = "border-box";
      products[i].style.width = "270px";
      products[i].style.height = "460px";
      products[i].style.margin = "15px 10px";
      products[i].style.display = "inline-block";
      products[i].style.textAlign = "left";
      products[i].style.backgroundColor = "#fff";
    }
    //third product - img
    let imgWrap = document.getElementsByClassName("img_wrap");

    for (let i = 0; i < products.length; i++) {
      imgWrap[i].style.width = "100%";
      imgWrap[i].style.height = "340px"
      imgWrap[i].style.overflow = "hidden";
      imgWrap[i].style.position = "relative";
    }

    //recipe
    let articleFour = document.getElementsByTagName("article")[3];
    articleFour.style.width = "1200px";
    articleFour.style.height = "auto";
    articleFour.style.textAlign = "center";
    articleFour.style.margin = "0 auto";
    articleFour.style.display = "flex";
    articleFour.style.flexFlow = "row wrap";
    articleFour.style.justifyContent = "center";
    articleFour.style.paddingBottom = "150px";

    let recipeTitle = document.getElementById("recipe_title");
    recipeTitle.innerHTML = "The Epiccure";
    recipeTitle.style.color = "#000";
    recipeTitle.style.fontSize = "28px";
    recipeTitle.style.lineHeight = "1.15";
    recipeTitle.style.letterSpacing = "-0.5px"
    recipeTitle.style.fontWeight = "900";
    recipeTitle.style.textAlign = "left";
    recipeTitle.style.margin = "50px 0 20px 45px";
    recipeTitle.style.width = "100%";

    let recipeBox = document.getElementsByClassName("recipe_box");

    for (let i = 0; i < recipeBox.length; i++) {
      recipeBox[i].style.boxSizing = "border-box";
      recipeBox[i].style.width = "350px";
      recipeBox[i].style.height = "370px";
      recipeBox[i].style.display = "inline-block";
      recipeBox[i].style.textAlign = "left";
      recipeBox[i].style.margin = "0 15px";
    }

    let recipeImg = document.getElementsByClassName("recipe_img");

    for (let i = 0; i < recipeBox.length; i++) {
      recipeImg[i].style.width = "100%";
      recipeImg[i].style.height = "260px";
      recipeImg[i].style.backgroundColor = "#000";
    }