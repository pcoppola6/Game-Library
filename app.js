// const library = [
// {
//     id: 1,
//     title: "On Mars",
//     player: "2-4",
//     img: "./pictures/mars.webp",
//     desc: "On Mars is a worker placement game set in both space and on the surface of Mars"
// },
// {
//     id: 2,
//     title: "Tzolk'in",
//     player: "2-4",
//     img: "./pictures/Tzolk'in.webp",
//     desc: "The Mayan Calendar game?"
// },
// {
//     id: 3,
//     title: "Kanban EV",
//     player: "2-4",
//     img: "./pictures/KanbanEV.webp",
//     desc: "A game about building cars"
// },
// {
//     id: 4,
//     title: "Lost Ruins of Arnak",
//     player: "2-4",
//     img: "./pictures/LostRuins.webp",
//     desc: "Worker placement game about exploring in the jungle"
// },
// {
//     id: 5,
//     title: "Dominant Species",
//     player: "2-6",
//     img: "./pictures/Dominant.webp",
//     desc: "One of the best games there ever was."
// }];
// const sectionCenter = document.querySelector(".section-center");
// const btnContainer = document.querySelector(".btn-container");
// // display all items when page loads
// window.addEventListener("DOMContentLoaded", function () {
//   diplayMenuItems(library);
//   displayMenuButtons();
// });

// function diplayMenuItems(menuItems) {
//   let displayMenu = menuItems.map(function (game) {
//     // console.log(item);

//     return `<article class="menu-item">
//           <img src=${game.img} alt=${game.title} class="photo" />
//           <div class="game-info">
//             <header>
//               <h4>${game.title}</h4>
//               <h4 class="player">${game.player}</h4>
//             </header>
//             <p class="game-text">
//               ${game.desc}
//             </p>
//           </div>
//         </article>`;
//   });
//   displayMenu = displayMenu.join("");
//   // console.log(displayMenu);

//   sectionCenter.innerHTML = displayMenu;
// }
// function displayLibraryButtons() {
//   const players = library.reduce(
//     function (values, game) {
//       if (!values.includes(game.player)) {
//         values.push(game.player);
//       }
//       return values;
//     },
//     ["all"]
//   );
//   const playerBtns = players
//     .map(function (player) {
//       return `<button type="button" class="filter-btn" data-id=${player}>
//           ${player}
//         </button>`;
//     })
//     .join("");

//   btnContainer.innerHTML = playerBtns;
//   const filterBtns = btnContainer.querySelectorAll(".filter-btn");
//   console.log(filterBtns);

//   filterBtns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       // console.log(e.currentTarget.dataset);
//       const player = e.currentTarget.dataset.id;
//       const menuPlayer= library.filter(function (menuItem) {
//         // console.log(menuItem.category);
//         if (menuItem.player === player) {
//           return menuItem;
//         }
//       });
//       if (player === "all") {
//         diplayMenuItems(library);
//       } else {
//         diplayMenuItems(menuPlayer);
//       }
//     });
//   });
// }

const library = [
  {
    id: 1,
    title: "On Mars",
    category: "4",
    players: '2-4',
    img: "./pictures/mars.webp",
    desc: `On Mars is played over several rounds, each consisting of two phases - the Colonization Phase ???and the Shuttle Phase???.`,
  },
  {
    id: 2,
    title: "Tzolk'in",
    category: "4",
    players: '2-4',
    img: "./pictures/Tzolk'in.webp",
    desc: `Tzolkin: The Mayan Calendar presents a new game mechanism: dynamic worker placement. Players representing different Mayan tribes place their workers on giant connected gears, and as the gears rotate they take the workers to different action spots.`,
  },
  {
    id: 3,
    title: "Kanban EV",
    category: "4",
    players: '2-4',
    img: "./pictures/KanbanEV.webp",
    desc: `You will be overseeing the production of these vehicles in Kanban EV, with "kanban" (??????) being the name for a scheduling system that supports an efficient assembly line, just-in-time production, and a smooth workflow process. `,
  },
  {
    id: 4,
    title: "Lost Ruins of Arnak",
    category: "4",
    players: '2-4',
    img: "./pictures/LostRuins.webp",
    desc: `Lost Ruins of Arnak combines deck-building and worker placement in a game of exploration, resource management, and discovery.`,
  },
  {
    id: 5,
    title: "Dominant Species",
    category: "6",
    players: '2-6',
    img: "./pictures/Dominant.webp",
    desc: `Dominant Species is a game that abstractly recreates a tiny portion of ancient history: the ponderous encroachment of an ice age and what that entails for the living creatures trying to adapt to the slowly-changing earth.`,
  },
  {
    id: 6,
    title: "Belfort",
    category: "5",
    players: '2-5',
    img: "./pictures/belfort.webp",
    desc: `Belfort is a worker placement game with area majority scoring in each district as well as for each type of worker.`,
  },
  {
    id: 7,
    title: "Wingspan",
    category: "5",
    players: "2-5",
    img: "./pictures/Wingspan.jpg",
    desc: `Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games.`,
  },
  {
    id: 8,
    title: "Puerto Rico",
    category: "5",
    players: "2-5",
    img:"./pictures/puertorico.webp",
    desc: `In Puerto Rico, players assume the roles of colonial governors on the island of Puerto Rico.`,
  }
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayLibraryGames(library);
  displayLibraryButtons();
});

function diplayLibraryGames(libraryGames) {
  let displayLibrary = libraryGames.map(function (game) {
    // console.log(item);

    return `<article class="library-game">
          <img src=${game.img} alt=${game.title} class="photo" />
          <div class="game-info">
            <header>
              <h4>${game.title}</h4>
              <h4 class="players">${game.players}</h4>
            </header>
            <p class="game-text">
              ${game.desc}
            </p>
          </div>
        </article>`;
  });
  displayLibrary = displayLibrary.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayLibrary;
}
function displayLibraryButtons() {
  const categories = library.reduce(
    function (values, game) {
      if (!values.includes(game.category)) {
        values.push(game.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = library.filter(function (libraryGame) {
        // console.log(menuItem.category);
        if (libraryGame.category === category) {
          return libraryGame;
        }
      });
      if (category === "all") {
        diplayLibraryGames(library);
      } else {
        diplayLibraryGames(menuCategory);
      }
    });
  });
}