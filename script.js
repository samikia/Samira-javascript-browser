
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
  //////////////////////////modal


  
const gallery  = document.querySelectorAll(".store-products"),//all pics
previewBox = document.querySelector(".preview-box"),//modalbox
previewImg = previewBox.querySelector("img"),//image modalbox
closeIcon = previewBox.querySelector(".icon"),//closeicone
currentImg = previewBox.querySelector(".current-img"),//the image in modal
totalImg = previewBox.querySelector(".total-img"),//numbs of image
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg
        let newIndex = i; //passing i value to newIndex
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}

  
  
  
  
  