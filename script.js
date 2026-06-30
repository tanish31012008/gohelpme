window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

const donateBtn = document.querySelector(".donate-button");

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

donateBtn.addEventListener("click", function(e){

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if(!isMobile){

        e.preventDefault();

        popup.classList.add("active");

    }

});

closePopup.addEventListener("click", ()=>{

    popup.classList.remove("active");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

});