var start = document.querySelector('#question')
var ques = document.querySelector('#question')
var score = 0

//set the questions and answers in an array
var Questions = [
	{
		text: "2+2",
		choices: ["1", "4", "7", "2"],
		correct: "4"
	},
	{
		text: "What college is this form",
		choices: ["UNH", "PSU", "Harvard", "Caltec"],
		correct: "UNH"
	},
	{
		text: "What color is the sky?",
		choices: ["red", "blue", "orange", "pink"],
		correct: "blue"
	},
	{
		text: "45 + 55?",
		choices: ["100", "105", "95", "64"],
		correct: "100"
	},
	{
		text: "What is the most common eye color?",
		choices: ["green", "blue", "brown", "pink"],
		correct: "brown"
	}
]

var place = 0

function upp(event) {
	location++;
}

start.addEventListener
	("click", function () {
		nextQuestion();
		var time = 20;
		var timedown = setInterval(function () {
			if (time <= 0) {
				clearInterval(timedown)
			}
		})
	})


// skip to the next question
function nextQuestion() {
	if (place < Questions.length) {
		document.getElementById("Quests").innerHTML = Questions[place].text
		Questions[place].choices.forEach(function (i) {
			//function i creats the choices for each button in the array
			const button = document.createElement("button");
			button.innerText = i;
			button.addEventListener("click", checkCorrect)
			answers.append(button)
			button.style.margin = '10px'
			button.style.backgroundColor = 'green'
			button.style.padding = '20px'
			button.style.fontSize = '20px'
		})
	}
	else {
		//When it runs out of questions show score
		var flscore = Math.floor(score);
		document.getElementById("Quests").innerHTML = "";
		const ccore = document.getElementById("Score").innerHTML = "score: " + String(flscore);
		ccore.style.margin = '10px';
		ccore.style.backgroundColor = 'green';
		ccore.style.padding = '20px';
		ccore.style.fontSize = '20px';
	}
}

//check if the things you click is correct
function checkCorrect(event) {
	var result = (event.target.textContent);
	var asCorrect = Questions[place].correct;
	if (result === asCorrect) {
		score++
	}
	else { }

	answers.innerHTML = ""
	place++
	nextQuestion();
}


function reset(){
	location.reload();
	}
