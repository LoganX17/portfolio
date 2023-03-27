const images = document.querySelectorAll("card body");
let index = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const active = "active" 
function showImg(i){
    images.forEach(image => image.classList.remove(active))
    images[i].classList.add(active)
}
next.addEventListener("click", function(){
  index = (index + 1) % images.length
   showImg(index);
   pause();
   })
prev.addEventListener("click", function(){
   index = (index + images.length - 1) % images.length
    showImg(index);
    pause();
    })
    showImg(index);
