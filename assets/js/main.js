// button up
let btn = document.getElementById('btn');

window.onscroll = function(){

    if (scrollY >= 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
}

btn.onclick = function(){
    scroll({
        left : 0,
        top : 0,
        behavior : "smooth"
    })
}
// ***********************************



// ********************************
// faqSection

let show = document.querySelectorAll(".show");
let hid = document.getElementById("hid");
let faqContent = document.querySelectorAll(".faq-item .faq-content p")

console.log(show);
for(let i = 0; i < faqContent.length; i++){
  show[i].addEventListener("click", () => {
    if (faqContent[i].style.display == "none") {
     faqContent[i].style.display = "block";
    } else {
     faqContent[i].style.display = "none";
    
    }
 })
}








