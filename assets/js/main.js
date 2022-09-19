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
function toggleModal() {
	document.getElementById('modal').classList.toggle('hidden')
  }
  function toggleModals() {
    document.getElementById('modals').classList.toggle('hidden')
    }