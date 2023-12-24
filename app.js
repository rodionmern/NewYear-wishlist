var Wish1, Wish2, Wish3, Wish4, Wish5, wishPrompt;

console.log("RaSka run!");

function addWish() {
	if (Wish1 == null) {
		console.log("Creating task...")
		wishPrompt = document.getElementById('prompt-text').value;
		Wish1 = document.getElementById('first-wish').innerHTML = wishPrompt;
		localStorage.setItem("first_w", wishPrompt)
	} else {
		if (Wish2 == null) {
			console.log("Creating task...")
			wishPrompt = document.getElementById('prompt-text').value;
			Wish2 = document.getElementById('second-wish').innerHTML = wishPrompt;
			localStorage.setItem("second_w", wishPrompt)
		} else {
			if (Wish3 == null) {
				console.log("Creating task...")
				wishPrompt = document.getElementById('prompt-text').value;
				Wish3 = document.getElementById('third-wish').innerHTML = wishPrompt;
				localStorage.setItem("third_w", wishPrompt)
			} else {
				if (Wish4 == null) {
					console.log("Creating task...")
					wishPrompt = document.getElementById('prompt-text').value;
					Wish4 = document.getElementById('fourth-wish').innerHTML = wishPrompt;
					localStorage.setItem("fourth_w", wishPrompt)
				} else {
					if (Wish5 == null) {
						console.log("Creating task...")
						wishPrompt = document.getElementById('prompt-text').value;
						Wish5 = document.getElementById('fifth-wish').innerHTML = wishPrompt;
						localStorage.setItem("fifth_w", wishPrompt)
					}
				}
			}
		}
	}
}

function loadWish() {
	if (localStorage.getItem("first_w") !== null) {
		console.log("Creating task...");
		Wish1 = document.getElementById('first-wish').innerHTML = localStorage.getItem("first_w");
	} else {
		console.log("У вас не задана первая хотелка!")
	}
	if (localStorage.getItem("second_w") !== null) {
		console.log("Creating task...");
		Wish1 = document.getElementById('second-wish').innerHTML = localStorage.getItem("second_w");
	} else {
		console.log("У вас не задана вторая хотелка!")
	} if (localStorage.getItem("third_w") !== null) {
		console.log("Creating task...");
		Wish1 = document.getElementById('first-wish').innerHTML = localStorage.getItem("first_w");
	} else {
		console.log("У вас не задана первая хотелка!")
	}
	if (localStorage.getItem("fourth_w") !== null) {
		console.log("Creating task...");
		Wish1 = document.getElementById('fourth-wish').innerHTML = localStorage.getItem("fourth_w");
	} else {
		console.log("У вас не задана вторая хотелка!")
	} 
}
