const games = [
    { name: "Aim Trainer", file: "aim-trainer.html", category: "skill" },
    { name: "Reaction Test", file: "reaction-test.html", category: "reflex" },
    { name: "Memory Cards", file: "memory-cards.html", category: "puzzle" },
    // Add the other 47 here...
];

function renderGames(filter = "all") {
    const container = document.getElementById('gameGrid');
    container.innerHTML = "";

    games.filter(g => filter === "all" || g.category === filter)
         .forEach(g => {
             const card = document.createElement("div");
             card.className = "game-card";
             card.innerHTML = `<h3>${g.name}</h3>`;
             card.onclick = () => {
                 playSound("click");
                 window.location.href = "games/" + g.file;
             };
             container.appendChild(card);
         });
}

function filterCategory(cat) {
    playSound("ui");
    renderGames(cat);
}

window.onload = () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = 0;
        setTimeout(() => document.getElementById("loader").style.display = "none", 600);
    }, 1200);
    
    renderGames();
};
