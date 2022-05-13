export const makeChart = () => {
  const myChartElement = document.getElementById("covidChart").getContext("2d");
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontColor = "#777";
  const covidChart = new Chart(myChartElement, config);

  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Cases",
        backgroundColor: "rgb(255, 99, 132)",
        // backgroundColor: ["green","pink","purple"],
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
        data: [0, 10, 5, 2, 20, 30, 45],
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
};

makeChart();
