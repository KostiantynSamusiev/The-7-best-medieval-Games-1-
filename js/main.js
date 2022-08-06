let questionCOntainer = document.querySelectorAll('.top'),
    arrow = document.querySelectorAll('.arrow'),
    burgerMenu = document.querySelector('.burger'),
    navLinks = document.querySelector('.navigation-links'),
    gameCard = document.querySelectorAll('.game_card'),
    lactive = document.querySelectorAll('.active');

// Burger menu
burgerMenu.onclick = () => {
  navLinks.classList.toggle('is-active');
};

$(document).on('click', '.main-btn', function(e){
  $(this).toggleClass('active');
  $('.btn-cont').toggleClass('active');
});

//  Carousel slider
$('.games_card_container').slick({
  infinite: true,
  centerMode: false,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

//Game-buttons
let $btns = $('.btn').click(function() {
let  $el = $('.' + this.id).fadeIn(450);
  $('#parent > div').not($el).hide();
  $btns.removeClass('active');
  $(this).addClass('active');
})

// Scrolling for game card
for (let i=0; i<gameCard.length; i++)
  gameCard[i].onclick = function () {
    window.scrollTo({
      left:0,
      top: 1570,
      behavior: "smooth"});

      let currentBtn = undefined;
      let btnA = document.getElementById('a');
      let btnB = document.getElementById('b');
      let btnC = document.getElementById('c');
      let btnD = document.getElementById('d');

     if (gameCard[i].id == "card-a" ){
       currentBtn = document.getElementById('a')
       btnB.classList.remove('active')
       btnC.classList.remove('active')
       btnD.classList.remove('active')
       currentBtn.classList.add('active');
       
     }
     else if (gameCard[i].id == "card-b" ){
       currentBtn = document.getElementById('b');
       currentBtn.classList.add('active')
       btnA.classList.remove('active')
       btnC.classList.remove('active')
       
     }
     else if (gameCard[i].id == "card-c" ){
       currentBtn = document.getElementById('c')
       btnA.classList.remove('active')
       btnB.classList.remove('active')
       btnD.classList.remove('active')
       currentBtn.classList.add('active');
     } 
     else if (gameCard[i].id == "card-d" ){
       currentBtn = document.getElementById('d')
       btnA.classList.remove('active')
       btnB.classList.remove('active')
       btnC.classList.remove('active')
       currentBtn.classList.add('active');
     }  

      if (window.screen.width >= 768) {
        window.scrollTo({
          left:0,
          top: 2820,
          behavior: "smooth"});
      }
      if (window.screen.width >= 1080) {
        window.scrollTo({
          left:0,
          top: 2070,
          behavior: "smooth"});
      }
      if (window.screen.width >= 1600) {
        window.scrollTo({
          left:0,
          top: 2290,
          behavior: "smooth"});
      }
}



  