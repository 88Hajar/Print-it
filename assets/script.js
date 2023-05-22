const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/**Evenement click bouton suivant **/
document.getElementById("right").addEventListener("click", nextSlide);

let dot = document.querySelectorAll('.dot');
let currentdot = 0;

/**Fonction suivant **/

function nextSlide() {
	 
if (currentdot==3){
	dot[currentdot].className = 'dot';
		currentdot =0;
		dot[currentdot].className = 'dot dot_selected';
	}
	else {
		dot[currentdot].className = 'dot';
		currentdot = currentdot+1;
		dot[currentdot].className = 'dot dot_selected';
	}

	/**Appeler fonction changerImage **/

	ChangeImage(currentdot);
}

/**Evenement click bouton precedent **/
document.getElementById("left").addEventListener("click", prevSlide);

/**Fonction précedent **/

function prevSlide() {
	if (currentdot == 0) {
		dot[currentdot].className = 'dot';
		currentdot = 3;
		dot[currentdot].className = 'dot dot_selected';
	}
	else {
		dot[currentdot].className = 'dot';

		currentdot = currentdot - 1;
		dot[currentdot].className = 'dot dot_selected';
	}
	/**Appeler fonction changerImage **/
	ChangeImage(currentdot);
}

/**Fonction changement image + Tag **/
function ChangeImage(x) {
	let slide = document.getElementById("banner-img");
	let tag = document.getElementById("tag");

	newsrc = './assets/images/slideshow/' + slides[x].image;
	newtag = slides[x].tagLine;

	slide.setAttribute("src", newsrc);
	tag.innerHTML = slides[x].tagLine;
}
