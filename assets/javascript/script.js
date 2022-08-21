var start = document.querySelector('#Start')
var ques = document.querySelector('#Start')
var score = 0;
var time = 60;
var place = 0;
sScreen = false;
var QTY = 1;

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
//grab from local storage
function upp(event) {
	location++;
}
//Set the TIMER
start.addEventListener
	("click", function () {
		time = 60
		place = 0

		//Setting up the timer
		function clock() {
			document.getElementById("time").innerHTML = --time;
			myTimer = setInterval(countDown, 1000); //sets function countDown to activate every 1 second

			//set the counter to go down to 0
			function countDown() {
				document.getElementById("time").innerHTML = --time;
				if (time < 0) {
					clearInterval(myTimer)
					scoreScreen()
				}
			}
		}
		function timeUp() {
			console.log("GAME OVER")
		}
		clock()
		nextQuestion();
		//Remove start button after quiz starts
		var elem = document.getElementById("Start");
		elem.style.visibility = "hidden";
	}
	)





// skip to the next question
function nextQuestion() {
	if (place < Questions.length) {
		document.getElementById("questions").innerHTML = Questions[place].text
		Questions[place].choices.forEach(function (i) {
			//function i creats the choices for each button in the array
			const button = document.createElement("li");
			button.innerText = i;
			button.addEventListener("click", checkCorrect)
			answers.append(button)
			button.style.margin = '10px'
			button.style.backgroundColor = 'green'
			button.style.padding = '20px'
			button.style.fontSize = '20px'
			button.style.width = '500px'
		})
	}
	else {
		//When it runs out of questions show score
		function endGame() {
			var flscore = Math.floor(score);
			document.getElementById("questions").innerHTML = "";
			const ccore = document.getElementById("Score").innerHTML = "score: " + String(flscore);
			ccore.style.margin = '10px';
			ccore.style.backgroundColor = 'green';
			ccore.style.padding = '20px';
			ccore.style.fontSize = '20px';
			localStorage.setItem('Score', score)
			clearInterval(myTimer)

		}
	}
}
console.log(QTY)
//check if the things you click is correct
function checkCorrect(event) {
	var result = (event.target.textContent);
	var asCorrect = Questions[place].correct;

	//Events when answer is correct
	if (result === asCorrect) {
		score++
		document.getElementById("right").innerHTML = "Right!!"
	}
	//Events when answer is incorrect
	else {
		document.getElementById("right").innerHTML = "Wronge!!"
		var rime = (time - 20)
		console.log(rime)
		time = rime

	}

	answers.innerHTML = ""
	place++
	nextQuestion();
}

<<<<<<< HEAD
//set up score screen(LS = local storage)
let LS = document.getElementById("scoreScreen")
LS.addEventListener('click', event => {
	scoreScreen()
	var sScreen = true
})


///Go to Scorre Screen!!!!!!!!!!!!!!!!!!!!!!!
function scoreScreen(event) {
	if (sScreen = true) {
		var QTY = window.localStorage.getItem('Qty')
		//set up the text on screen
		var elem = document.getElementById("Start");
		document.getElementById("Resulta").style = "display: inline"
		elem.style.display = 'none';
		console.log("OPEN UP");

		//set View Scores button to Back to quiz button
		var buttonChange = document.getElementById("scoreScreen")
		changepage()
		buttonChange.classList.add("inputBar")

		//Get text box to appear
		const input = document.getElementById("userName");
		const inputbtn = document.getElementById("userNamebtn");
		input.style.display = "inline"
		inputbtn.style.display = "inline"

		//set all other text empty
		var p = document.getElementById("questions").textContent = "Enter your name!";
		document.getElementById("answers").textContent = "";
		document.getElementById("Start").textContent = "";
		document.getElementById("time").textContent = "";

		//find out what play you are

		//Enter puts data into Local Storage and puts you to scores
		var RF = document.getElementById("userNamebtn");
		RF.addEventListener('click', event => {
			var name = document.getElementById('userName').value
			window.localStorage.setItem('name' + QTY, name + "   Score:" + score)
			displayScores()
			console.log(name)


			//increase the # for amount of Local storage saves

		})
		let MY = document.getElementById("show")
		MY.addEventListener('click', event => {
			allStorage()
			function allStorage() {
				var values = [],
					keys = Object.keys(localStorage),
					i = keys.length;
				console.log(i)
				while (i--) {
					values.push(localStorage.getItem(keys[i]));
				}

				console.log(values)
				window.localStorage.setItem('Qty', values)
			}
		})
	}
}



if (sScreen = true) {//reload page when go back to quiz
	function changepage() {
		var MP = document.getElementById("quizScreen")
		MP.addEventListener('click', event => {
			backQuiz()
		})
	}
}

function backQuiz() {
	//resets the quiz layout
	console.log("IsThis???")
	document.getElementById("ul").style = "display: none"
	var p = document.getElementById("questions").textContent = "Questions";
	document.getElementById("answers").textContent = "";
	document.getElementById("time").textContent = "time";


	//Removes the textbar (if exists)
	var elemtxtbar = document.getElementById("userName");
	elemtxtbar.style.display = "none"
	var elembtn = document.getElementById("userNamebtn");
	elembtn.style.display = "none"
	var startBtn = document.getElementById("Start");
	startBtn.style.display = "inline";
	startBtn.textContent = "Start";
	console.log("meee")
}

//function to display the scores
function displayScores() {
	allStorage()
	function allStorage() {
		var values = [],
			keys = Object.keys(localStorage),
			i = keys.length;
		console.log(i)
		while (i--) {
			values.push(localStorage.getItem(keys[i]));
		}
		
		let KE = document.getElementById("refreshList")
		KE.addEventListener('click', event => {
			document.getElementById("userNamebtn").style.display = "inline"
			document.getElementById("refreshList").style.display = "inline"

			document.getElementById("Haa").remove()
		})

		console.log(values)
		var sayScore = document.getElementById("questions");
		sayScore.textContent = "LeaderBoard"
		sayScore.style.display = "inline"
		document.getElementById("userNamebtn").style.display = "inline"
		document.getElementById("refreshList").style.display = "inline"

		

		//set loop too make things
		for (let r = 0; r < values.length; r++){
		var LBscores = document.createElement("li")
		LBscores.textContent = (values[r])
		LBscores.setAttribute("id", "Haa")
		Resulta.append(LBscores);
		console.log(r)

		}

	}
}
//value that will calculate how many list items there are
function P()
document.ready(function(){
	P("Resulta").click(function(){
	   P("#li").remove();
	});
 });


///clear local storage
function clear() {
	localStorage.clear();
	console.log("wee")
	console.log(buttonChange)
}
=======

function reset(){
	location.reload();
	}
>>>>>>> 4b32e015735ad3f9d0979eda5cc507c2fb924135
