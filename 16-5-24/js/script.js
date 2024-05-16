const listaCelle = [];
const creaCelle = (numeri) => {
  const tabella = document.getElementById("tabella");

  for (let i = 0; i < numeri; i++) {
    const cella = document.createElement("div");

    cella.classList.add("numero");

    const contenutoCella = document.createElement("h3");

    contenutoCella.innerText = i + 1;

    cella.appendChild(contenutoCella);

    tabella.appendChild(cella);

    listaCelle.push(cella);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  creaCelle(76);
});

const creaNumero = (evento) => {
  const listaNumeriRandom = [];
  const bottone = document.getElementById("bottoneEstrai");
  const numeroRandom = Math.floor(Math.random() * 77 - 1);
  const numeroVisualizzato = document.querySelector("h2");
  numeroVisualizzato.innerText = numeroRandom;
  if (listaNumeriRandom.includes(numeroRandom)) {
    return creaNumero();
  } else {
    listaNumeriRandom.push(numeroRandom);
    listaCelle[numeroRandom].classList.add("selezionato");
  }
};
