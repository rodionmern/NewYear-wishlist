var Wish1, Wish2, Wish3, Wish4, Wish5, wishPrompt;
var date = new Date();
var NewYear = "31.11";
var NowDate = date.getDate() + "." + date.getMonth();

console.log("RaSka run!");
console.log(" ");
console.log("     <>");
console.log("     /\\");
console.log("    /||\\");
console.log("   /||||\\");
console.log("  /||||||\\");
console.log(" /||||||||\\");
console.log(" ");
if (NowDate == NewYear) {
	console.log("New year TODAY! Congralutions you!)")
}

function addWish() {
	if (Wish1 == null) {
		console.log("Creating task...")
		wishPrompt = document.getElementById('prompt-text').value;
		Wish1 = document.getElementById('first-wish').innerHTML = "1. " + wishPrompt;
		localStorage.setItem("first_w", wishPrompt)
	} else {
		if (Wish2 == null) {
			console.log("Creating task...")
			wishPrompt = document.getElementById('prompt-text').value;
			Wish2 = document.getElementById('second-wish').innerHTML = "2. " + wishPrompt;
			localStorage.setItem("second_w", wishPrompt)
		} else {
			if (Wish3 == null) {
				console.log("Creating task...")
				wishPrompt = document.getElementById('prompt-text').value;
				Wish3 = document.getElementById('third-wish').innerHTML = "3. " + wishPrompt;
				localStorage.setItem("third_w", wishPrompt)
			} else {
				if (Wish4 == null) {
					console.log("Creating task...")
					wishPrompt = document.getElementById('prompt-text').value;
					Wish4 = document.getElementById('fourth-wish').innerHTML = "4. " + wishPrompt;
					localStorage.setItem("fourth_w", wishPrompt)
				} else {
					if (Wish5 == null) {
						console.log("Creating task...")
						wishPrompt = document.getElementById('prompt-text').value;
						Wish5 = document.getElementById('fifth-wish').innerHTML = "5. " + wishPrompt;
						localStorage.setItem("fifth_w", wishPrompt)
					}
				}
			}
		}
	}
}

function loadWish() {
	if (localStorage.getItem("first_w") !== null) {
		console.log("Loading wish1...");
		Wish1 = document.getElementById('first-wish').innerHTML = "1. " + localStorage.getItem("first_w");
	} else {
		console.log("wish1 = null!")
	}
	if (localStorage.getItem("second_w") !== null) {
		console.log("Loading wish2...");
		Wish1 = document.getElementById('second-wish').innerHTML = "2. " + localStorage.getItem("second_w");
	} else {
		console.log("wish2 = null!")
	} 
	if (localStorage.getItem("third_w") !== null) {
		console.log("Loading wish3...");
		Wish1 = document.getElementById('third-wish').innerHTML = "3. " + localStorage.getItem("third_w");
	} else {
		console.log("wish3 = null!")
	}
	if (localStorage.getItem("fourth_w") !== null) {
		console.log("Loading wish4...");
		Wish1 = document.getElementById('fourth-wish').innerHTML = "4. " + localStorage.getItem("fourth_w");
	} else {
		console.log("wish4 = null!")
	} 
	if (localStorage.getItem("fifth_w") !== null) {
		console.log("Loading wish5...");
		Wish5 = document.getElementById('fifth-wish').innerHTML = "5. " + localStorage.getItem("fifth_w");
	} else {
		console.log("wish5 = null!")
	} 
}
