let generalChart = null;
export const makeChart = (x, y) => {
  if (generalChart && generalChart != null) {
    generalChart.destroy();
  }

  const myChartElement = document.getElementById("covidChart").getContext("2d");

  const labels = x;
  // .map((country) => {
  //   return country.name;
  // });
  const yAxis = y.map((country) => country.newConfirmed);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Cases",
        backgroundColor: "rgb(129, 132, 222)",
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
    type: "line",
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
    },
  };

  generalChart = new Chart(myChartElement, config);
};
