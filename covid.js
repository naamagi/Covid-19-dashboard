import {makeChart} from './chart.js';
const countries=[];
const fetchCountries = async () => {
  try {
    const res = [];
    const countries = await getFetchedData("https://restcountries.herokuapp.com/api/v1/");
    return countries.map((country, i) => {

        const statisticsPerCountry = await Promise.all(
            conjoinedGroups.map((e) =>
              getFetchedData(`https://capsules-asb6.herokuapp.com/api/user/${e.id}`)
            )
          );


      return {
        name: country.name.common,
        continent: country.region,
        subregion: country.subregion,
      };
    });
  } catch (e) {
    console.log(e);
  }
};

const getFetchedData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchCountries()
  .then((data) => {
    countries=data;
    console.log(data);
  })
  .catch((e) => console.log(e));
