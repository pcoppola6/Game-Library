const library = [
{
    id: 1,
    title: "On Mars",
    players: "2-4",
    img: "./pictures/mars.webp",
    desc: "On Mars is a worker placement game set in both space and on the surface of Mars"
},
{
    id: 2,
    title: "Tzolk'in",
    players: "2-4",
    img: "./pictures/Tzolk'in.webp",
    desc: "The Mayan Calendar game?"
},
{
    id: 3,
    title: "Kanban EV",
    players: "2-4",
    img: "./pictures/KanbanEV.webp",
    desc: "A game about building cars"
},
{
    id: 4,
    title: "Lost Ruins of Arnak",
    players: "2-4",
    img: "./pictures/LostRuins.webp",
    desc: "Worker placement game about exploring in the jungle"
},
{
    id: 5,
    title: "Dominant Species",
    players: "2-6",
    img: "./pictures/Dominant.webp",
    desc: "One of the best games there ever was."
}];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener('DOMContentLoaded', function() {
    let displayLibrary = library.map(function (game) {
        //console.log(game);
        return `<article class="menu-item">
        <img src=${game.img} class="photo" alt=${game.title}>
         <div class="game-info">
            <header>
            <h4>${game.title}</h4>
            <h4 class="players">${game.players}</h4>
            </header>
            <p class="game-desc">${game.desc}</p>
    </div>
    </article>`;
    });

    displayLibrary = displayLibrary.join("");
    console.log(displayLibrary);

    sectionCenter.innerHTML = displayLibrary;

});