var Wish1, Wish2, Wish3, Wish4, Wish5, wishPrompt;

console.log("RaSka run!");

function addWish() {
	if (Wish1 == null) {
		console.log("Creating task...")
		wishPrompt = document.getElementById('prompt-text').value;
		Wish1 = document.getElementById('first-wish').innerHTML = wishPrompt;
	} else {
		if (Wish2 == null) {
			console.log("Creating task...")
			wishPrompt = document.getElementById('prompt-text').value;
			Wish2 = document.getElementById('second-wish').innerHTML = wishPrompt;
		} else {
			if (Wish3 == null) {
				console.log("Creating task...")
				wishPrompt = document.getElementById('prompt-text').value;
				Wish3 = document.getElementById('third-wish').innerHTML = wishPrompt;
			} else {
				if (Wish4 == null) {
					console.log("Creating task...")
					wishPrompt = document.getElementById('prompt-text').value;
					Wish4 = document.getElementById('fourth-wish').innerHTML = wishPrompt;
				} else {
					if (Wish5 == null) {
						console.log("Creating task...")
						wishPrompt = document.getElementById('prompt-text').value;
						Wish5 = document.getElementById('fifth-wish').innerHTML = wishPrompt;
					}
				}
			}
		}
	}
}
