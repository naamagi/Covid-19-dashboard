let covidCountryChart=null;
export const makeOneCountryChart = (y) => {
    if (covidCountryChart && covidCountryChart != null) {
        covidCountryChart.destroy();
  }
  
    const myChartElement = document.getElementById("countryStatistics").getContext("2d");

  const labels = [
    "New Deaths",
    "New Confirmed",
    "Total Deaths",
    "Total Confirmed",
    "Total Recovered",
    "Total Critical Condition",
  ];
  console.log("labels:"+labels);

//   const  {
//     newDeaths,
//     newConfirmed,
//     totalDeaths,
//     totalConfirmed,
//     totalRecovered,
//     totalCritical,
//   } = y;
  
  const yAxis=Object.keys(y)
  .map(function(key) {
      return y[key];
  }).slice(1);

  console.log("y"+yAxis);
  const data = {
    labels: labels,
    datasets: [
      {
        label: `${y.name} statistics`,
        backgroundColor: "rgb(31, 159, 54)",
        borderColor: "blue",
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
        data: yAxis,
        fill: true,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      title: {
        display: true,
        text: "Covid-19 cases per country",
        fontSize: 25,
        // fontColor: "black"
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "#000",
        },
      },

      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };


  covidCountryChart = new Chart(myChartElement, config);
};
