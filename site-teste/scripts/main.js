function mudarH1() {
    const novah1 = document.querySelector("h1");
    novah1.textContent = "Assistencia Autorizada";    
}

function verificarSite() {
    let site = "Assistencia";
    if (site === "Assistencia") {
      alert("solicitar visita tecnica!");
    } else {
      alert("Aaaamas chocolate é o meu favorito…");
    }    
}

document.querySelector("img").addEventListener("click", verificarSite);