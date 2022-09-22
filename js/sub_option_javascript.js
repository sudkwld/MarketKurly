    // 옵션 클릭 시 가격 가져오기
    function selectPrice() {
      const productSelect = document.getElementById('productPrice')
      const productOption = document.querySelectorAll('#productPrice option')
      const resultPrice = document.querySelector('#result')
      productSelect.addEventListener('change', e => {
        resultPrice.value = e.target.value
        resultPrice.style.width = `${100}px`
        if (resultPrice.value.length < 2) {
          resultPrice.style.width = `${20}px`
        }
      })
    }
    selectPrice()