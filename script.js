let arr = document.querySelectorAll('.btn')
let random
let opponent = document.querySelector('.opponent')
let choosen = document.querySelector('.choosen')
let play = document.querySelector('.start')
let result = document.querySelector('.result')
let scissors = document.querySelector('.scissors')
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')

play.onclick = function () {
	arr.forEach((e) => {
		e.style.display = 'block'
	})
	play.style.display = 'none'
	scissors.addEventListener('click', function () {
		random = arr[Math.floor(Math.random() * arr.length)].innerHTML
		opponent.innerHTML = random
		choosen.innerHTML = `You Chose ${scissors.innerHTML}`
		if (opponent.innerHTML == 'Rock') {
			result.innerHTML = 'You Lost!'
		}
		else if (opponent.innerHTML == 'Paper') {
			result.innerHTML = 'You Win!'
		}
		else if (opponent.innerHTML == 'Scissors') {
			result.innerHTML = 'Play again!'
		}
		else {
			result.innerHTML = 'Error'
		}
		opponent.innerHTML = `Opponent Chose ${opponent.innerHTML}`
		opponent.append()
		result.append()
	})

	paper.addEventListener('click', function () {
		random = arr[Math.floor(Math.random() * arr.length)].innerHTML
		opponent.innerHTML = random
		choosen.innerHTML = `You Chose ${paper.innerHTML}`
		if (opponent.innerHTML == 'Rock') {
			result.innerHTML = 'You Win!'
		}
		else if (opponent.innerHTML == 'Scissors') {
			result.innerHTML = 'You Lost!'
		}
		else if (opponent.innerHTML == 'Paper') {
			result.innerHTML = 'Play again!'
		}
		else {
			result.innerHTML = 'Error'
		}
		opponent.innerHTML = `Opponent Chose ${opponent.innerHTML}`
		opponent.append()
		result.append()
	})

	rock.addEventListener('click', function () {
		random = arr[Math.floor(Math.random() * arr.length)].innerHTML
		opponent.innerHTML = random
		choosen.innerHTML = `You Chose ${rock.innerHTML}`
		if (opponent.innerHTML == 'Scissors') {
			result.innerHTML = 'You Win!'
		}
		else if (opponent.innerHTML == 'Paper') {
			result.innerHTML = 'You Lost!'
		}
		else if (opponent.innerHTML == 'Rock') {
			result.innerHTML = 'Play again!'
		}
		else {
			result.innerHTML = 'Error'
		}
		opponent.innerHTML = `Opponent Chose ${opponent.innerHTML}`

		opponent.append()
		result.append()
	})
}


