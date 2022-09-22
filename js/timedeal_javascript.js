    //timedeal timer
    let countDownDate = new Date("Jan 1, 2025 20:19:18").getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = "남은시간 " + hours + " : " + minutes + " : " + seconds;

      if (distance < 0) {
        clearInterVal(x);
        document.getElementById("timer").innerHTML = "타임딜 종료";
      }
    }, 1000);