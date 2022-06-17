function sendButton() {
    getWord = document.getElementById("wordholder").value;
    word = getWord.toLowerCase();
    console.log("Word that has been converted to lowercase: " + word);

    CharAt1 = word.charAt(1);
    console.log("first character = " + CharAt1);

    CharAtcenter = Math.floor(word.length / 2);
    CharAt2 = word.charAt(CharAtcenter);
    console.log("center character = " + CharAt2)

    CharAtLast = word.length - 1;
    CharAt3 = word.charAt(CharAtLast);
    console.log("third letter = " + CharAt3);

    removeCharAt1 = word.replace(CharAt1, "_");
    removeCharAt2 = removeCharAt1.replace(CharAt2, "_");
    removeCharAt3 = removeCharAt2.replace(CharAt3, "_");
    console.log("Final Word: " + removeCharAt3);


    //document.getElementById("question").innerHTML = "Question: " + removeCharAt3;
    questionword = "<h4 id = 'question'>Q. " + removeCharAt3 + "</h4>";
    inputbox = "<br>answer: <input id = 'answerbox' type = 'text'>"
    checkbutton = "<br> <button id = 'check' onclick = 'check()' class = 'btn btn-success'> " + "Check Answer" + "</button>"

    row = questionword + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;

    document.getElementById("wordholder").value = "";
}

var player1_name = localStorage.getItem("Player_1_name");
var player2_name = localStorage.getItem("Player_2_name");

var player1_score = 0
var player2_score = 0

var answer_turn = "player1"

document.getElementById("player1_name").innerHTML = player1_name + " :  ";
document.getElementById("player2_name").innerHTML = player2_name + " :  ";
document.getElementById("player2_score").innerHTML = " " + player2_score;
document.getElementById("player1_score").innerHTML = " " + player1_score;

document.getElementById("player-question").innerHTML = "Question Turn - " + player2_name;
document.getElementById("player-answer").innerHTML = "Answer Turn - " + player1_name;

function check() {
    answer = document.getElementById("answerbox").value;
    final_answer = answer.toLowerCase();
    console.log("Answer inputted = " + final_answer + "| real answer = " + word);

    if (final_answer == word) {

        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            console.log("correct answer. Player 1 score = " + player1_score);
            document.getElementById("player-question").innerHTML = "Question Turn - " + player1_name;
            document.getElementById("player-answer").innerHTML = "Answer Turn - " + player2_name;
            document.getElementById("player1_score").innerHTML = player1_score;
            answer_turn = "player2"
 
        }
        else {
            player2_score = player2_score + 1;
            console.log("right answer. Player 2 score = " + player2_score);
            document.getElementById("player-question").innerHTML = "Question Turn - " + player2_name;
            document.getElementById("player-answer").innerHTML = "Answer Turn - " + player1_name;
            document.getElementById("player2_score").innerHTML = player2_score;
            answer_turn = "player1"

        }

    }
    else {
        console.log("wrong answer. Scores remain the same");
        if (answer_turn == "player1") {
            answer_turn = "player2";
           document.getElementById("player-question").innerHTML = "Question Turn - " + player1_name;
           document.getElementById("player-answer").innerHTML = "Answer Turn - " + player2_name;

        }
        else {
            answer_turn = "player1";
            document.getElementById("player-question").innerHTML = "Question Turn - " + player2_name;
            document.getElementById("player-answer").innerHTML = "Answer Turn - " + player1_name;
        }
    }
document.getElementById("output").innerHTML = "";
}