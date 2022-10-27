// const tabs = document.querySelectorAll(".tabs");
// const tab = document.querySelectorAll(".tab");
// const panel = document.querySelectorAll(".tab-content");

// function onTabClick(event) {

//   // deactivate existing active tabs and panel

//   for (let i = 0; i < tab.length; i++) {
//     tab[i].classList.remove("active");
//   }

//   for (let i = 0; i < panel.length; i++) {
//     panel[i].classList.remove("active");
//   }


//   // activate new tabs and panel
//   event.target.classList.add('active');
//   let classString = event.target.getAttribute('data-target');
//   console.log(classString);
//   document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
// }

// for (let i = 0; i < tab.length; i++) {
//   tab[i].addEventListener('click', onTabClick, false);
// }


// function app() {
// 	return {
// 		step: 1, 
// 		passwordStrengthText: '',
// 		togglePassword: false,

		
// 		password: '',
// 		gender: 'Male',

// 		checkPasswordStrength() {
// 			var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
// 			var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

// 			let value = this.password;

// 			if (strongRegex.test(value)) {
// 				this.passwordStrengthText = "Strong password";
// 			} else if(mediumRegex.test(value)) {
// 				this.passwordStrengthText = "Could be stronger";
// 			} else {
// 				this.passwordStrengthText = "Too weak";
// 			}
// 		}
// 	}
// }
var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14"],
		datasets: [{
			label: 'Completed 9578',
			backgroundColor: "#25DA91",
			data: [780, 750, 480, 740, 460,430, 900, 500, 450,590,620,880, 900,490],
		}, {
			label: 'With AM 7823',
			backgroundColor: "#FFD600",
			data: [12, 59, 5, 56, 58,12, 59, 85, 23, 100,20,90,60,10],
		}, {
			label: 'In Progress 4456',
			backgroundColor: "#436AD6",
      color:'red',
			data: [12, 20, 5, 56, 50,1, 59, 85, 23, 10,20,30,60,10],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      backgroundColor: "#fff",
      titleFontColor:"#000",
      bodyFontColor:"#000",
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { 
      position: 'top', 
      labels: {
        boxWidth: 14,
        boxHeight: 2,
      }
  }
	},

});
