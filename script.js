
score = 0;
Hiscore = 0;

// List of images
const images = [
    'imgs/ad1.png',
    'imgs/ad2.png',
    'imgs/ad3.png',
    'imgs/ad4.png',
    'imgs/ad5.png',
    'imgs/ad6.png',
    'imgs/ad7.png',
    'imgs/ad8.png',
    'imgs/ad9.png'
    // Add paths to all your images here
];

function getRandomImage() {
	const randomIndex = Math.floor(Math.random() * images.length);
	return images[randomIndex];
}



var words = ["Sub now!", "Buy this!", "Free!", "Waifus!", "New game!"];

// Function to get a random word from the array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

document.addEventListener("DOMContentLoaded", function() {
	
	cargarValor();
	
})

function start() {
	
	const elements = document.querySelectorAll('.popuptop');

    // Loop through each element and apply your script
    elements.forEach((element) => {
		
		toclose(element, true);
		
	})
	
}

function toclose(element, istart) {
	
	if (istart != true) {
		score += 1;
		counted.textContent = "Patience: " + score;
		playSound();
		if (score > Hiscore) {
			Hiscore = score;
			hcounted.classList.remove("animated");
			void hcounted.offsetWidth; // Trigger reflow to restart the animation
			hcounted.classList.add("animated");
			guardarValor();
		}
		hcounted.textContent = "Hight Patience: " + Hiscore;
	}
	var parentElement = element.parentNode;
	
	var clos = randomIntFromInterval(1, 3);
	if (clos == 1) {
		parentElement.style.scale = "1 0";
		parentElement.style.transformOrigin = "top";
	} else if (clos == 2) {
		parentElement.style.scale = "0 0";
		parentElement.style.transformOrigin = "center";
	} else {
		parentElement.style.scale = "0 1";
		parentElement.style.transformOrigin = "center";
	}
	
	setTimeout(function() {
		toOpen(parentElement, element);
	}, 200);
	
}

function toclosestart(element) {
	
	var parentElement = element.parentNode;
	
	parentElement.style.transformOrigin = "center";
	parentElement.style.scale = "0";
	
	setTimeout(function() {
		start();
	}, 200);
	
}

function toOpen(parent, child) {
	
	child.textContent = getRandomWord();
	imgchild = parent.querySelector('.imageholder');
	imgchild.style.backgroundImage = `url(${getRandomImage()})`;
	
	var ranX = randomIntFromInterval(20, 80)
	var ranY = randomIntFromInterval(20, 80)
	
	parent.style.left = ranX + "%";
	parent.style.top = ranY + "%";
	setTimeout(function() {
		popin(parent)
	}, 200);
	
}

function popin(parent) {
	
	parent.style.scale = 1;
	
}

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function playSound() {
	
	
	aud = "sounds/pressed" + randomIntFromInterval(1, 5) + ".wav"
	// Create a new instance of Audio
	let audio = new Audio(aud);
	// Play the sound
	audio.play();
	
}

/* === SAVE === */

// Función para guardar el valor en el almacenamiento local
function guardarValor() {
	
    localStorage.setItem('Hscore', Hiscore);
	
}

// Función para cargar el valor desde el almacenamiento local
function cargarValor() {
	
    var valorGuardado = localStorage.getItem('Hscore');
    if (valorGuardado) {
        Hiscore = valorGuardado;
		hcounted.textContent = "Hight Patience: " + Hiscore;
	} else {
		Hiscore = 0;
	}
	
}



