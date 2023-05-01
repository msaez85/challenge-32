/*challenge 32*/

class Barco {
  #draft = '';
  #crew = '';

  constructor(draft, crew) {
    this.#draft = draft;
    this.#crew = crew;
  }

  botinBueno() {
    return this.#draft - (this.#crew * 1.5) > 20;
  }
}

function checkBarco() {
	const ship = new Barco(document.getElementById("draft").value, document.getElementById("crew").value);
  
  if (ship.botinBueno()) {
		alert('Es un buen botin, adelante!');
	} else {
		alert('No vale la pena, sigue tu camino');
	}

  document.getElementById('form-barco').reset();
}