$(document).ready(function() {
	$('#nav-hidden').hide();

	if(window.matchMedia("(max-width:850px)").matches) {
	   	$('#nav-items').html('<img src="images/menu-btn.jpg" id="menu-btn">');
    } else {
    	$('#nav-items').html('<div class="nav-item"><a href="galerie.html">Galerie</a></div><div class="nav-item"><a href="mouvements.html">Mouvements</a></div><div class="nav-item"><a href="artistes.html">Artistes</a></div><div class="nav-item"><a href="#">Expositions</a> </div><div class="nav-item"><a href="#">À propos</a></div>');   
    }

	function redimensioning() {
	  	if("matchMedia" in window) { // Détection
	    	if(window.matchMedia("(max-width:850px)").matches) {
	    		$('#nav-items').html('<img src="images/menu-btn.jpg" id="menu-btn">');
	    	} else {
	    		$('#nav-items').html('<div class="nav-item"><a href="#">Galerie</a></div><div class="nav-item"><a href="mouvements.html">Mouvements</a></div><div class="nav-item"><a href="artistes.html">Artistes</a></div><div class="nav-item"><a href="#">Expositions</a> </div><div class="nav-item"><a href="#">À propos</a></div>');
	    		$('#nav-hidden').hide(); 
	    	}
	  	}
	}

	window.addEventListener('resize', redimensioning, false);


	$('#nav-items').on('click', function(){
		if(window.matchMedia("(max-width:850px)").matches) {
			$('#nav-hidden').slideToggle();

		}
	});

});