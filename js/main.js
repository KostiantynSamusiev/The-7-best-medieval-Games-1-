let explenationContainer = document.querySelectorAll('.game');
let questionCOntainer = document.querySelectorAll('.top');
let arrow = document.querySelectorAll('.arrow');


let burgerMenu = document.querySelector('.burger');
let navLinks = document.querySelector('.navigation-links');
console.log(navLinks)



burgerMenu.onclick = () => {
  navLinks.classList.toggle('is-active');
};

  
 //  Add css class to oped dropdown
for (let i=0; i<questionCOntainer.length; i++){
  questionCOntainer[i].onclick = function () {
    explenationContainer[i].classList.toggle('is-active');
    arrow[i].classList.toggle('rotate');
  };
}


//  Carousel slider
$('.games_card_container').slick({
  infinite: true,
  centerMode: false,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1
});









  