var start = document.querySelector('#Start')
var ques = document.querySelector('#Start')
var score = 0;
var time = 60;
var place = 0;
var sScreen = false;
var currentindex = 0;
var num = 0;

//set the questions and answers in an array
var Questions = [
	{
		text: "2+2",
		choices: ["1", "4", "7", "2"],
		correct: "4"
	},
	{
		text: "Which is global and changable",
		choices: ["var", "const", "function", "let"],
		correct: "var"
	},
	{
		text: "Which of the folowing calls upon a function?",
		choices: ["const", "var", "onclick", "<div>"],
		correct: "onclick"
	},
	{
		text: "Which brackets should you use for contents within a function?",
		choices: ["[]", "{}", "()", "<>"],
		correct: "{}"
	},
	{
		text: "What should a html document start with?",
		choices: ["<!DOCTYPE html>", "<head>", "<header>", "<title>"],
		correct: "<!DOCTYPE html>"
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
					clearInterval(myTimer);
					scoreScreen();
					document.getElementById("right").textContent = "Ran Out of time."
				}
			}
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
	} else
		if (place >= 5) {
			scoreScreen()
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
				ccore.style.classList = 'none'
				localStorage.setItem('Score', score)
				clearInterval(myTimer)
			}
		}
}
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
		document.getElementById("right").innerHTML = "Wrong!!"
		var rime = (time - 20)
		time = rime

	}

	answers.innerHTML = ""
	place++
	nextQuestion();
}

//set up score screen(LS = local storage)
let LS = document.getElementById("scoreScreen")
LS.addEventListener('click', event => {
	sScreen = true

})


///Go to Scorre Screen!!!!!!!!!!!!!!!!!!!!!!!


function scoreScreen() {
	if (sScreen = true) {
		//reset quiz variables
		time = 0
		const ccore = document.getElementById("Score").innerHTML = ("Your Score:  " + score)

		//show list items enables
		var ulist = document.getElementById("ul")
		ulist.style.visibility = "visible"

		//show scores button visible
		var Entr = document.getElementById("userNamebtn")
		Entr.style.visibility = 'visible';

		//shows your score
		var ull = document.getElementById("Start")
		ull.style.visibility = "visible"

		//set up the text on screen
		var reslt = document.getElementById("Resulta")
		reslt.style.visibility = 'visible';

		//hide the start button
		var elem = document.getElementById("Start");
		elem.style.visibility = 'hidden';

		//show t4est button
		var testbutton = document.getElementById("show")
		testbutton.style.visibility = "shown"

		//set View Scores button to Back to quiz button
		var buttonChange = document.getElementById("scoreScreen")
		buttonChange.classList.add("inputBar")

		//Get text box to appear
		var input = document.getElementById("inputBar");
		input.style.visibility = 'visible';

		//get enter button to appear
		var inputbtn = document.getElementById("userNamebtn");
		inputbtn.style.visibility = 'visible';

		//get other btuton appear
		var inputbtn = document.getElementById("SSbuttons");
		inputbtn.style.visibility = 'visible';

		changepage()
		//set all other text empty
		var p = document.getElementById("questions").textContent = "Enter your name!";
		document.getElementById("answers").textContent = "";
		document.getElementById("Start").textContent = "";
		document.getElementById("time").textContent = "";
	}
}
//Enter puts data into Local Storage and puts you to scores

function enter() {
	var emptythis = document.getElementById("ul")
	emptythis.textContent = ""
	var name = document.getElementById('inputBar').value
	window.localStorage.setItem(name, name + " Score:" + score)

	allStorage()
	function allStorage() {
		var values = [],
			keys = Object.keys(localStorage),
			i = keys.length;
		while (i--) {
			values.push(localStorage.getItem(keys[i]));

		}
		num = values;
		displayScores()
	}
}

//increase the # for amount of Local storage saves





if (sScreen = true) {//reload page when go back to quiz
	function changepage() {
		var MP = document.getElementById("quizScreen")
		MP.addEventListener('click', event => {
		})
	}
}

function backQuiz() {

	//reset vairables
	score = 0 
	//resets the quiz layout
	var reslt = document.getElementById("Resulta")
	reslt.style.visibility = 'hidden';

	var ull = document.getElementById("ul")
	ull.style.visibility = "hidden"
	ull.textContent = ""

	var ull = document.getElementById("Score")
	ull.style.visibility = "hidden"

	var questions = document.getElementById("questions");
	questions.textContent = "Questions"

	var answers = document.getElementById("answers")
	answers.textContent = "";

	var answers = document.getElementById("Resulta")
	answers.style.visibility = "hidden";

	var timee = document.getElementById("time").textContent = "time";
	time.textContent = "time"

	var elem = document.getElementById("Start");
	elem.style.visibility = "visible";

	

	//Removes the textbar (if exists)
	var elemtxtbar = document.getElementById("inputBar");
	elemtxtbar.style.visibility = "hidden"
	var elembtn = document.getElementById("userNamebtn");
	elembtn.style.visibility = "hidden"
	var startBtn = document.getElementById("Start");
	startBtn.style.visibility = "shown";
	startBtn.textContent = "Start";

	//stop timer
	time = 0

}


var value = []
//function to display the scores
function displayScores() {
	allStorage()
	function allStorage() {
		var values = [],
			keys = Object.keys(localStorage),
			i = keys.length;
		while (i--) {
			values.push(localStorage.getItem(keys[i]));
			value = values
		}
	}
	let kill = document.getElementById("refreshList")
	kill.addEventListener('click', event => {
		document.getElementById("ul").textContent = ""
		localStorage.clear()
	})


	//set up leaderboard
	var sayScore = document.getElementById("questions");
	sayScore.textContent = "LeaderBoard"
	sayScore.style.visibility = "shown"
	document.getElementById("userNamebtn").style.visibility = "shown"
	document.getElementById("refreshList").style.visibility = "shown"

	//show refresh buton
	var refr = document.getElementById("show")
	refr.style.visibility = "shown"

	//set loop too make things
	for (let i = 0; i < value.length; i++) {
		var list = document.getElementById("ul")
		list.style.visibility = "shown"
		var LBscores = document.createElement("li")
		LBscores.textContent = value[i]
		LBscores.setAttribute("id", "Haa")
		ul.append(LBscores);
	}
}





let clearStorageExcept = function (exceptions) {
	let keys = [];
	exceptions = [].concat(exceptions); // prevent undefined

	// get storage keys
	$.each(localStorage, (key) => {
		keys.push(key);
	});

	// loop through keys
	for (let i = 0; i < keys.length; i++) {
		let key = keys[i];
		let deleteItem = true;

		// check if key excluded
		for (let j = 0; j < exceptions.length; j++) {
			let exception = exceptions[j];
			if (key == exception) {
				deleteItem = false;
			}
		}

		// delete key
		if (deleteItem) {
			localStorage.removeItem(key);
		}
	}
};
