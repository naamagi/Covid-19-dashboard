// import { fetchCountries } from "./covid.js";
// import { fetchCountryStatistics } from "./covid.js";
import { makeChart } from "./chart.js";
import { makeOneCountryChart } from "./oneCountryChart.js";



// const allFunctions=async()=>{
    // await initializePage();
// import {
//   countriesArr,
//   statisticsArr,
// } from "./pagePaint.js";
// console.log(countriesArr);
// let countriesArr = [...(await fetchCountries())];
// let statisticsArr = [...(await fetchCountryStatistics())];
// const createHealthStatusButtons =()=>{
//    const clinicalStatus= document.getElementsByClassName('clinicalStatus');

// }
// const countrySelection = document.getElementsByClassName("countrySelection");
const localCountriesArr=[...countriesArr];

const getCountriesOfContinent = (continentName) => {
  
  return localCountriesArr.filter((country) => {
    if (country.region.toLowerCase().includes(continentName)) {
      return country.name;
    }
  });
};
const asiaCountriesNames = getCountriesOfContinent("asia");
const americaCountriesNames = getCountriesOfContinent("america");
 const europeCountriesNames = getCountriesOfContinent("europe");
const africaCountriesNames = getCountriesOfContinent("africa");
const oceaniaCountriesNames = getCountriesOfContinent("oceania");

const worldCountriesNames = asiaCountriesNames.concat(
americaCountriesNames,
europeCountriesNames,
africaCountriesNames,
oceaniaCountriesNames
);




// const showOneCountryStatistics = () => {
//   const countryStatisticsElement = document.getElementById("countryStatistics");
// };

const addListenersToHealthStatus = () => {
  const statuses = document.getElementsByClassName("status");
  statuses.forEach((status) => {
    status.addEventListener("click", (event) => {});
  });
};

const updateSelectList = (e) => {
  const continentsContainer = document.querySelector(".continents");
  continentsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("continent")) {
      const selectElement = document.querySelector("select");

      while (selectElement.hasChildNodes()) {
        selectElement.removeChild(selectElement.firstChild);
      }
      const continentName = e.target.getAttribute("id");
      let arr;
      if (continentName === "asia") {
        arr = asiaCountriesNames;
      } else if (continentName === "america") {
        arr = americaCountriesNames;
      } else if (continentName === "europe") {
        arr = europeCountriesNames;
      } else if (continentName === "africa") {
        arr = africaCountriesNames;
      } else if (continentName === "Oceania") {
        arr = oceaniaCountriesNames;
      } else if (continentName === "world") {
        arr = worldCountriesNames;
      }
      for (let i = 0; i < arr.length; i++) {
        const newOption = document.createElement("option");
        newOption.value = arr[i];
        newOption.innerText = `${arr[i]}`;
        newOption.addEventListener("click", displayCountryDetails);
        selectElement.appendChild(newOption);
      }
    }
  });
};

const addListenerToContinent = () => {
  const continentsContainer = document.querySelector(".continents");
  continentsContainer.addEventListener("click", updateSelectList);
};

addListenerToContinent();

const displayCountryDetails = (event) => {
  const relevantObj = statisticsArr.filter(
    (obj) => obj.name === event.target.value
  );

  makeOneCountryChart(relevantObj);
};
