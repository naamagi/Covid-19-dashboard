export const fetchCountries = async () => {
  
  try {
    const countriesArr = await getFetchedData(
      "https://nameless-citadel-58066.herokuapp.com/https://restcountries.herokuapp.com/api/v1/"
    );
    return structureCountriesObj(countriesArr);
  } catch (e) {
    console.log(e);
  }
};

const structureCountriesObj = (countries) => {
  return countries.map((country) => {
    return {
      name: country.name.common,
      region: country.region,
    };
  });
};

export const fetchCountryStatistics = async () => {
  try {
    const countriesStatisticsObj = await getFetchedData(
      "https://corona-api.com/countries"
    );
    return structureCountryStatisticsObj(countriesStatisticsObj);
  } catch (e) {
    console.log(e);
  }
};

const structureCountryStatisticsObj = (countriesObj) => {
  return countriesObj.data.map((country) => {
    return {
      name: country.name,
      newDeaths: country.today.deaths,
      newConfirmed: country.today.confirmed,
      totalDeaths: country.latest_data.deaths,
      totalConfirmed: country.latest_data.confirmed,
      totalRecovered: country.latest_data.recovered,
      totalCritical: country.latest_data.critical,
    };
  });
};

// export const fetchCountriesPerContinent = async () => {
//   let countryNames = [1,2,3,4,5];
//   let promiseArr = [prom1, prom2, prom3, prom4, prom5];
//   let continentArr = ["asia", "america", "europe", "africa", "oceania"];
//   try {
//     for (let index = 0; index < promiseArr.length; index++) {
//       promiseArr[index] = await getFetchedData(
//         `https://nameless-citadel-58066.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/${continentArr[index]}`
//       );
//     //   console.log(promiseArr[index]);

//     }
//     const result = await Promise.all(promiseArr);
//     // console.log(result);
//     for (let index = 0; index < promiseArr.length; index++) {
//       countryNames[index] = 
//         structureCountriesObj(promiseArr[index]);
    //     }
//   } catch (e) {
//     console.log(e);
//   }
//   console.log(countryNames);

//   return countryNames;
// };

const getFetchedData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
