import { fetchCountries } from "./covid.js";
import { fetchCountryStatistics } from "./covid.js";
import { makeChart } from "./chart.js";
import { makeOneCountryChart } from "./oneCountryChart.js";
export let countriesArr;
export let statisticsArr;
export const initializePage = async () => {
  countriesArr = [...(await fetchCountries())];
  console.log(countriesArr);
  statisticsArr = [...(await fetchCountryStatistics())];
  //   return {countriesArr:countriesArr,statisticsArr:statisticsArr};
  const localCountriesArr = [...countriesArr];
  console.log(localCountriesArr);
  console.log(statisticsArr[28]);
  // makeOneCountryChart(statisticsArr[4]);
  makeChart(countriesArr, statisticsArr);

  const getCountriesOfContinent = (continentName) => {
    return localCountriesArr
      .filter((country) => country.region.toLowerCase().includes(continentName))
      .map((country) => Object.values(country));
  };
  const asiaCountriesNames = getCountriesOfContinent("asia");
  const americaCountriesNames = getCountriesOfContinent("america");
  console.log(americaCountriesNames);
  const europeCountriesNames = getCountriesOfContinent("europe");
  const africaCountriesNames = getCountriesOfContinent("africa");
  const oceaniaCountriesNames = getCountriesOfContinent("oceania");

  const worldCountriesNames = asiaCountriesNames.concat(
    americaCountriesNames,
    europeCountriesNames,
    africaCountriesNames,
    oceaniaCountriesNames
  );
console.log(worldCountriesNames);
  const addListenersToHealthStatus = () => {
    const statuses = document.getElementsByClassName("status");
    statuses.forEach((status) => {
      status.addEventListener("click", (event) => {});
    });
  };

  const updateSelectList = (e) => {
    const continentsContainer = document.querySelector(".continents");
    // continentsContainer.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("continent")) {
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
  };
  //   });
  // };

  const callGeneralChartMaker = (event) => {};

  const addListenerToContinent = () => {
    const continentsContainer = document.querySelector(".continents");
    continentsContainer.addEventListener("click", updateSelectList);
    continentsContainer.addEventListener("click", callGeneralChartMaker);
  };

  addListenerToContinent();

  const displayCountryDetails = (event) => {
    const relevantObj = statisticsArr.filter(
      (obj) => obj.name === event.target.value
    );

    makeOneCountryChart(relevantObj);
  };
};

initializePage();
