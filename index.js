const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");


function openModal(){
modal.classList.add("active");
overLay.classList.add("overlayactive")
}


function closeModal(){
    modal.classList.remove("active");
    overLay.classList.remove("overlayactive")
}



