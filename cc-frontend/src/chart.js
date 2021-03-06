<div>
<canvas id='myChart'>

</canvas>
</div>
<script>
  let myChart = document.getElementById('myChart').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Lato';
  Chart.defaults.global.defaultFontSize = 16;
  Chart.defaults.global.defaultFontColor = '#777';
  // var ctx = document.getElementById("myChart");

  let massPopChart = new Chart(myChart, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'BTC',
          data: [{x: moment("2018-07-08"),y: 117.6},
                {x: moment("2018-07-15"),y: 108.34},
                {x: moment("2018-07-22"),y: 127.43},
                {x: moment("2018-07-29"),y: 140.75},
                {x: moment("2018-08-05"),y: 121.94},
                {x: moment("2018-08-12"),y: 109.1},
                {x: moment("2018-08-19"),y: 112.34},
                {x: moment("2018-08-26"),y: 115.85},
                {x: moment("2018-09-02"),y: 125.02},
                {x: moment("2018-09-09"),y: 107.23},
                {x: moment("2018-09-16"),y: 112.34},
                {x: moment("2018-09-23"),y: 125.11},
                {x: moment("2018-09-30"),y: 114.87},
                {x: moment("2018-10-03"),y:  112.12}],
          showLine: true,
          fill: false,
          borderColor: 'rgba(0, 200, 0, 1)'
        },
        {
          label: 'EBAY',
          data: [{x: moment("2018-07-08"),y: 36.4},
                {x: moment("2018-07-15"),y: 37.1},
                {x: moment("2018-07-22"),y: 33.3},
                {x: moment("2018-07-29"),y: 33.75},
                {x: moment("2018-08-05"),y: 36.78},
                {x: moment("2018-08-12"),y: 31.79},
                {x: moment("2018-08-19"),y: 33.42},
                {x: moment("2018-08-26"),y: 32.9},
                {x: moment("2018-09-02"),y: 33.614},
                {x: moment("2018-09-09"),y: 33.69},
                {x: moment("2018-09-16"),y: 34.22},
                {x: moment("2018-09-23"),y: 33.32},
                {x: moment("2018-09-30"),y: 32.5},
                {x: moment("2018-10-03"),y:  32.72}],
          showLine: true,
          fill: false,
          borderColor: 'rgba(200, 0, 200, 1)'
        },
        {
          label: 'XRP',
          data: [{x: moment("2018-07-08"),y: 19},
                {x: moment("2018-07-15"),y: 17.32},
                {x: moment("2018-07-22"),y: 18.3},
                {x: moment("2018-07-29"),y: 17.75},
                {x: moment("2018-08-05"),y: 16.78},
                {x: moment("2018-08-12"),y: 11.79},
                {x: moment("2018-08-19"),y: 13.42},
                {x: moment("2018-08-26"),y: 12.9},
                {x: moment("2018-09-02"),y: 13.614},
                {x: moment("2018-09-09"),y: 11.29},
                {x: moment("2018-09-16"),y: 11.12},
                {x: moment("2018-09-23"),y: 23},
                {x: moment("2018-09-30"),y: 24.7},
                {x: moment("2018-10-03"),y:  21.12}],
          showLine: true,
          fill: false,
          borderColor: 'rgba(200, 4, 0, 1)'
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Market cap in Billions (Num of shares * price per share)'
      },
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        displayFormats: {
          // 'millisecond': 'MMM DD',
          // 'second': 'MMM DD',
          // 'minute': 'MMM DD',
          // 'hour': 'MMM DD',
          'day': 'MMM DD',
          'week': 'MMM DD',
          'month': 'MMM DD',
          // 'quarter': 'MMM DD',
          'year': 'MMM DD',
        }
      }
    }],
    scales: {
      yAxes: [{
        scaleLabel: {
        display: true,
        labelString: 'probability',
  },
}],
},
      hover: {
        mode: 'nearest',
        intersect: true
      },
      ticks: {
          beginAtZero:true
          }
        // }]

      }
    }
  })


</script>
