document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const inputs = form.querySelectorAll("input, textarea");

		const nome = inputs[0].value.trim();
		const email = inputs[1].value.trim();
		const messaggio = inputs[2].value.trim();

		// controllo campi vuoti
		if (!nome || !email || !messaggio) {
			alert("Compila tutti i campi!");
			return;
		}

		// validazione email base
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			alert("Email non valida!");
			return;
		}

		// successo
		alert("Messaggio inviato con successo!");

		// reset form
		form.reset();
	});
});
