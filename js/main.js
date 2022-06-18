//console.log(document.querySelectorAll('.row-bench ul li'))
let row = document.querySelectorAll('.row-bench ul li')
let sendHandler = document.querySelector('.btn')
let cardPut = document.querySelector('.card-put')
let cardPush = document.querySelector('.card-push')
let setString = document.querySelector('span')
let selected = ''
console.log(setString.textContent)
for (let i = 0; i < row.length; i++) {
	row[i].onclick = () => {
		let act = document.querySelector('.row-bench ul li.active');
		if(act) {
			act.classList.remove('active')
		}
		row[i].classList.add('active')
		selected += row[i].textContent
		// console.log(row[i].textContent)
	}
}
sendHandler.onclick = () => {
	if (selected !== '') {
		cardPut.style.opacity = "0";
		cardPush.style.opacity = "1";
		cardPush.style.zIndex = "1";
		setString.textContent = `You selected ${selected} out of 5`
		console.log(`${selected} go to next`)
	} else {
		console.log(`no no`)
	}
	
}