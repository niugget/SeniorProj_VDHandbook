//This script is to change the font on the interactive section of Typography
document.addEventListener("DOMContentLoaded", function() {

	function changeFont(){
		console.log("Changing font.. " + this.id);

		var content=
		document.getElementById("txtChange");

		if(this.id === "serif"){
			content.style.fontFamily = '"Libre Baskerville",serif';
		}

		if(this.id === "sans-serif"){
			content.style.fontFamily ='"Lato", sans-serif';
		}

		if(this.id === "decorative"){
			content.style.fontFamily ='"Pacifico", decorative';
		}

		if(this.id === "no"){
			content.style.fontFamily='"Comic Sans MS", no';
		}
	}

	document.getElementById("serif").addEventListener("change", changeFont);
	document.getElementById("sans-serif").addEventListener("change", changeFont);
	document.getElementById("decorative").addEventListener("change", changeFont);
	document.getElementById("no").addEventListener("change", changeFont);

});

//This script is to keep the header "sticky" aka at the top of the page
$(document).ready(function(){
				$('.sticky-navigation').waypoint('sticky');
			});

//This section is for the smooth scrolling effect that happens when you click on a subject on the home page
$(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;

         $(this).click(function() {
            $("#subjects li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

});


//These events are attached so that the cards can be tapped on when using a touch screen device
	$(document).ready(function(){
	$('.hover').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});
});


	
