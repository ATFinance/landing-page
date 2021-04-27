import ApexCharts from "apexcharts";

class Chart {
  static init() {
    var options = {
      series: [40, 12, 28, 20],
      labels: [
        "Pre-Sale",
        "Marketing Development and Team",
        "Liquidity",
        "Community Activity Voting for Growth",
      ],
      chart: {
        width: 530,
        type: "donut",
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#0662c5",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    var options2 = {
      series: [30, 70],
      labels: ["Marketing & Development", "Liquidity"],
      chart: {
        width: 470,
        type: "donut",
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#0662c5",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "97%",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
    chart2.render();
  }
}

export default Chart;
