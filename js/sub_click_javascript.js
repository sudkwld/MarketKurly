    //클릭시 div가 보이는 버튼
    function closeBtn() {
      let problem = document.getElementById("problem");
      if (problem.style.display == "none") {
        problem.style.display = "block";
      } else {
        problem.style.display = "none";
      }
    }

    function closeBtnTwo() {
      let cancel = document.getElementById("cancel");
      if (cancel.style.display == "none") {
        cancel.style.display = "block";
      } else {
        cancel.style.display = "none";
      }
    }
