// alert('hi');

// vars
	var timer = 30;
	var countdown;
	var countdownMsg;
	var ques;
	var inputName_questNum;
	var incorrect_answers;
	var choice;
	var multChoice;
	var num = ["one", "two", "three", "four", "five"];
	var ans = ["Murder", "Black", "Keratin", "Melopsittacus undulatus", "Komodo dragon"]
	var correct = 0;
	var wrong = 0;
	var unanswered = 0;

// questions
	var questions = 
			{
				results: [
					{
						category: "Animals",
						type: "multiple",
						difficulty: "easy",
						question: "What is the collective noun for a group of crows?",
						correct_answer: "Murder",
						questionNum: "one",
						incorrect_answers: [
						"Pack",
						"Gaggle",
						"Herd"
						]
					},
					{
						category: "Animals",
						type: "multiple",
						difficulty: "medium",
						question: "What color/colour is a polar bear's skin?",
						correct_answer: "Black",
						questionNum: "two",
						incorrect_answers: [
						"White",
						"Pink",
						"Green"
						]
					},
					{
						category: "Animals",
						type: "multiple",
						difficulty: "medium",
						question: "What are rhino's horn made of?",
						correct_answer: "Keratin",
						questionNum: "three",
						incorrect_answers: [
						"Bone",
						"Ivory",
						"Skin"
						]
					},
					{
						category: "Animals",
						type: "multiple",
						difficulty: "hard",
						question: "What is the scientific name of the Budgerigar?",
						correct_answer: "Melopsittacus undulatus",
						questionNum: "four",
						incorrect_answers: [
						"Nymphicus hollandicus",
						"Pyrrhura molinae",
						"Ara macao"
						]
					},
					{
						category: "Animals",
						type: "multiple",
						difficulty: "medium",
						question: "Which of these species is not extinct?",
						correct_answer: "Komodo dragon",
						questionNum: "five",
						incorrect_answers: [
						"Japanese sea lion",
						"Tasmanian tiger",
						"Saudi gazelle"
						]
					}
				]
			};


// console.log(questions.results[1].question);

//loop through to generate the questions and answer
	for (var i = 0; i < questions["results"].length; i++) {
			ques = $("<h3>").text(questions.results[i].question);

			$('#questions').append(ques);
			
		//include correct ans to answer choices
			incorrect_answers = questions.results[i].incorrect_answers
			choice = [questions.results[i].correct_answer, incorrect_answers[0], incorrect_answers[1], incorrect_answers[2]];
			choice = choice.sort(function(a, b){return 0.5 - Math.random()});

			for (var j = 0; j < choice.length; j++) {

				inputName_questNum = questions.results[i].questionNum;
				multChoice = $("<label>").html("<input type='radio' name='" + inputName_questNum + "' value='" + choice[j] + "'>" + choice[j]);
				// console.log(choice[j]);

				$('#questions').append(multChoice);

			}
		console.log(questions.results[i].correct_answer);
	}

// displays
	countdownMsg = $('#timer').text("Time Remaining: " + timer + " Seconds");

// when start button clicked
	$('#start').on('click', function () {
		$('#timer').show();
		countdown = setInterval(start, 1000);

		$('#questions').show();
		$('#startMsg').hide();


	});

// timer starts to count down
	function start() {
		timer--;
		$('#timer').text("Time Remaining: " + timer + " Seconds");

		if (timer == 0) {
			clearInterval(countdown);
			timer = 0;
			$('#timer').text("Time Remaining: " + timer + " Seconds");

			score();
			
		}
	}


//	count the scores
	function score() {
		//couldn't get the num[n] as the input name to work
			// for (var a = 0; a < ans.length; a++) {
			// 	for (var n = 0;  n < num.length; n++) {
			// 		if ($("input[name='num[n]']:checked")) {
			// 			if ($("input[name='num[n]']:checked").val() == ans[a]) {
			// 				alert('correct');
			// 				correct++;
			// 			}else if ($("input[name='num[n]']:checked").val() !== ans[a] && $("input[name='num[n]']:checked").val() !== undefined) {
			// 				wrong++;
			// 			}else if ($("input[name='num[n]']:checked").val() == undefined) {
			// 				unanswered++;
			// 			}
			// 		}
			// 	}
			// }

		if ($("input[name=one]:checked")) {
			if ($("input[name=one]:checked").val() == ans[0]) {
				correct++;
			}else if ($("input[name=one]:checked").val() !== ans[0] && $("input[name=one]:checked").val() !== undefined) {
				wrong++;
			}else if ($("input[name=one]:checked").val() == undefined) {
				unanswered++;
			}
		}

		if ($("input[name=two]:checked")) {
			if ($("input[name=two]:checked").val() == ans[1]) {
				correct++;
			}else if ($("input[name=two]:checked").val() !== ans[1] && $("input[name=two]:checked").val() !== undefined) {
				wrong++;
			}else if ($("input[name=two]:checked").val() == undefined) {
				unanswered++;
			}
		}

		if ($("input[name=three]:checked")) {
			if ($("input[name=three]:checked").val() == ans[2]) {
				correct++;
			}else if ($("input[name=three]:checked").val() !== ans[2] && $("input[name=three]:checked").val() !== undefined) {
				wrong++;
			}else if ($("input[name=three]:checked").val() == undefined) {
				unanswered++;
			}
		}

		if ($("input[name=four]:checked")) {
			if ($("input[name=four]:checked").val() == ans[3]) {
				correct++;
			}else if ($("input[name=four]:checked").val() !== ans[3] && $("input[name=four]:checked").val() !== undefined) {
				wrong++;
			}else if ($("input[name=four]:checked").val() == undefined) {
				unanswered++;
			}
		}

		if ($("input[name=five]:checked")) {
			if ($("input[name=five]:checked").val() == ans[4]) {
				correct++;
			}else if ($("input[name=five]:checked").val() !== ans[4] && $("input[name=five]:checked").val() !== undefined) {
				wrong++;
			}else if ($("input[name=five]:checked").val() == undefined) {
				unanswered++;
			}
		}
		console.log ("correct: " + correct, "wrong: " + wrong, "unanswered: " + unanswered);

		$('#timer').hide();
		$('#questions').hide();

		$('#msg1').text('Correct Answers: ' + correct);
		$('#msg2').text('Incorrect Answers: ' + wrong);
		$('#msg3').text('Unanswers: ' + unanswered);

	}

