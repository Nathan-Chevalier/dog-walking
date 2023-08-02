import { getWalkers, getCities } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

export const Walkers = () => {
  let walkerHTML = "<ul>";

  for (const walker of walkers) {
    for (const city of cities) {
      if (walker.cityId === city.id) {
        walkerHTML += `<li data-id="${walker.id}"
    data-city="${city.name}"
    data-type="walker"
    >${walker.name}
    </li>`;
      }
    }
  }

  walkerHTML += "</ul>";

  return walkerHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "walker") {
    window.alert(`This walker works in ${itemClicked.dataset.city}`);
  }
});
