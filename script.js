const btnNao = document.getElementById("btnNao");
const btnSim = document.getElementById("btnSim");

// Função para mover o botão "Não"
btnNao.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    
    btnNao.style.position = "fixed";
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
});

// Para funcionar no celular (touch)
btnNao.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    
    btnNao.style.position = "fixed";
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
});

// Ação do botão "Sim"
btnSim.addEventListener("click", () => {
    document.querySelector("section").innerHTML = `
        <h1 style="opacity:1; animation: fadeIn 2s">❤️</h1>
        <p style="opacity:1; animation: fadeIn 3s">Estamos oficialmente namorando!<br>Prometo te fazer a mulher mais feliz do mundo.</p>
    `;
});
