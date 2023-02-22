//nav change bgcolor-scroll
function changeBg(){
    var navbarcolor = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbarcolor.classList.remove('bgColor');
    } else{
        navbarcolor.classList.add('bgColor');
    }
}
window.addEventListener('scroll', changeBg);
//end change bgcolor-scroll

//animation transition content about

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show-left');
            entry.target.classList.add('show-right');
           
        }else{
            entry.target.classList.remove('show-left');
            entry.target.classList.remove('show-right');
           
        }
    }); 
})

const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right');
hiddenElements.forEach((el) => observer.observe(el));


// -------------------------



//end animation transition content about

//nav color-nav
var btnContainer = document.getElementById('navbar');
var btns = btnContainer.getElementsByClassName('btn');

for(var i =0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        var current = document.getElementsByClassName(" active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    })
}
