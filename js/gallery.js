
$(document).ready(function(){

$(".preview a").on("click", function(){
$(".selected").removeClass("selected");
$(this).addClass("selected");
var picture = $(this).data();

event.preventDefault(); //prevents page from reloading every time you click a thumbnail

$(".full img").fadeOut( 100, function() { 
$(".full img").attr("src", picture.full);
$(".full").attr("href", picture.full);
$(".full").attr("title", picture.title);

}).fadeIn();

});// end on click

$(".full").fancybox({
helpers : {
title: {
type: 'inside'
}
},
closeBtn : true,
});

});//end doc ready

