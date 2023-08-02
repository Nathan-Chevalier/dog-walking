import { getWalkers, getCities } from "./database.js";

const walkers = getWalkers();
const cities = getCities();

document.addEventListener("click", (clickEvent) => {
  const cityTarget = clickEvent.target;
  const cityId = cityTarget.dataset.id;
  if (cityTarget.dataset.type === "city") {
    for (const walker of walkers) {
      if (parseInt(cityId) === walker.cityId) {
        window.alert(`${walker.name} is servicing this city`);
      }
    }
    //window.alert(`${cityTarget.dataset.walkername} is servicing this city`);
  }
});

const removeDuplicate = (array) => {
  return [...new Set(array)];
};

export const CityList = () => {
  let citiesHTML = "<ul>";
  let cityArray = [];
  for (const walker of walkers) {
    for (const city of cities) {
      if (walker.cityId === city.id) {
        cityArray.push(city);
      }
    }
  }
  let cityList = removeDuplicate(cityArray);
  for (const city of cityList) {
    citiesHTML += `<li data-type="city" data-id="${city.id}">${city.name}</li>`;
  }
  // for (const walker of walkers) {
  //   citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`;
  // }

  citiesHTML += "</ul>";

  return citiesHTML;
};
