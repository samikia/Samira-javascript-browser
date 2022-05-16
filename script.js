

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * letters.length)];
    }
  
    document.body.style.backgroundColor = randomColor;
  }
  let btncl = document.getElementById("js-button")
  btncl.style.margin = "20% 40%"