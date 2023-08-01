let allImgs = document.querySelectorAll(".images-slides img");
let theMainImg = document.getElementById("main-img");
console.log(allImgs);

allImgs.forEach(function(img){
    img.addEventListener("click",(e)=>{
        allImgs.forEach(function(img){
            img.classList.remove("active");
        })
        theMainImg.src = e.target.src;
        img.classList.add("active");

    })
})