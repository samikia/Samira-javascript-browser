
//project 1
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * letters.length)];
    }
  
    document.body.style.backgroundColor = randomColor;
  }
  let btncl = document.getElementById("js-button")
  btncl.style.margin = "0% 45%"
  //end

  // second project
  
  
  const btns = document.querySelectorAll(".btn");
  const storeproducts = document.querySelectorAll(".store-products");
  for (i = 0; i < btns.length; i++) {
  
    btns[i].addEventListener("click", (e) => {
      e.preventDefault();
      const filter = e.target.dataset.filter;
      //console.log(filter)
      storeproducts.forEach((product) => {
        if (filter === "all") {
          product.style.display = "block"
        } else {
          if (product.classList.contains(filter)) {
            product.style.display = "block"
          } else {
            product.style.display = "none"
          }
        }
  
      })
    })
  }
  //////////////////////////////////////////////////////
  const searchclick = () => {
    const input = document.getElementById("search").value;
    const searchimage = document.querySelectorAll(".store-products");
    storeproducts.forEach((product) => {
      if (input === "all") {
        product.style.display = "block"
      } else {
        if (product.classList.contains(input)) {
          product.style.display = "block"
        } else {
          product.style.display = "none"
        }
      }
  
    })
  
  
  }
  
  
  
  
  
  
  
  