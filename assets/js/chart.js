
// Chart Js

/*=========================================
User Acquisition
===========================================*/
var acquisition = document.getElementById('acquisition');

var acChart = new Chart(acquisition, {
    // The type of chart we want to create
    type: 'line',
    
    // The data for our dataset
    data: {
        labels: ["1 ", "2 ", "3 ", "4", "5", "6", "7", "8", "9"],
        datasets: [
        {
          label: "Product 1",
          backgroundColor: "rgba(0, 202, 114, 0.34)",
          borderColor: "#00CA72",
          pointBackgroundColor: "#00CA72",
          data: [78, 88, 68, 74, 50, 55, 25, 60, 10,],
          lineTension: 0.3,
          pointHoverBackgroundColor: 'rgba(76, 132, 255,1)',
          pointHoverRadius: 3,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        },
          {
          label: "Product 2",
          backgroundColor: "rgba(255, 204, 0, 0.21)",
                          borderColor: "#FFCC00",
                          pointBackgroundColor: "#FFCC00",
          data: [88, 108, 78, 95, 65, 73, 42, 50, 5],
          lineTension: 0.3,
          pointHoverBackgroundColor: 'rgba(254, 196, 0,1)',
          pointHoverRadius: 3,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        },
         
      ]
    },
    
    // Configuration options go here
    options: {
      legend: {
          display: false
       },
      
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          }
        }],
        yAxes: [{
          gridLines: {
             display:true
          },
          ticks: {
             beginAtZero: true,
          },
       }]
     },
     tooltips: {
    }
  }
});
document.getElementById('customLegend').innerHTML = acChart.generateLegend();

// pie chart
var BAChartDataValue = [
	25, 
	25, 
	25, 
	25, 
]; /* 개발 연동 데이터 */
var BAChartDataLabel = [
	'Product 1', 
	'Product 2', 
	'Product 3', 
	'Product 4', 
]; /* 개발 연동 데이터 */
var BAChartJobErrColors = [
  '#FFCC00',
	'#436AD6',
	'#00CA72',
	'#FB275D',

];

// var BAChartCountTotal = 0;
// if (BAChartDataValue.length > 0) {
// 	BAChartCountTotal = BAChartDataValue.reduce(function(acc, currentVal, currentIdx, arr){
// 		return acc + currentVal;
// 	}, 0);
// }


	var BAChartCtx = document.getElementById('BA-chart-job-error').getContext('2d');
	var BAChartJobErr = new Chart(BAChartCtx, {
		type: 'doughnut',
		data: {
			labels: BAChartDataLabel,
			datasets: [{
				data: BAChartDataValue,
				backgroundColor: BAChartJobErrColors,
				borderColor: '#fff',
				borderWidth: 1,
			}]
		},
		options: {
			responsive: false,
			maintainAspectRatio: false,
			title: {
				display: true,
				position: 'top',
				fontSize: 12,
				fontColor: '#000',
				fontStyle: 'bold',
				padding: 24,
				// text: '오류 현황',
			},
			plugins: {
				labels: [
					{
						// render: 'label',
						// fontColor: '#000',
						// position: 'outside'
					},
					{
						// render: 'percentage',
						fontColor: '#fff',
					}
				],
				// doughnutlabel: {
				// 	labels: [
				// 		{
				// 			text: 'Total: ' + BAChartCountTotal,
				// 		}
				// 	]
				// }
			},
			legend: {
				display: false
			}
		}
	});

document.getElementById('customLegend1').innerHTML = BAChartJobErr.generateLegend();

