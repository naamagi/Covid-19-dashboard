import { fetchCountries } from "./covid.js";
import { fetchCountryStatistics } from "./covid.js";
import {makeChart } from "./chart.js"
import {makeOneCountryChart } from "./oneCountryChart.js"
export let countriesArr;
export let statisticsArr;
export const initializePage = async () => {

   countriesArr = [...(await fetchCountries())];
  console.log(countriesArr);
    statisticsArr = [...(await fetchCountryStatistics())];
//   return {countriesArr:countriesArr,statisticsArr:statisticsArr};

console.log(statisticsArr[28]);
// makeOneCountryChart(statisticsArr[4]);
makeChart(countriesArr,statisticsArr);

}



initializePage();