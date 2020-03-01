//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var que1 = document.getElementById("que1").checked;
    var que2 = document.getElementById("que2").checked;
    var que3 = document.getElementById("que3").checked;
    var que4 = document.getElementById("que4").checked;
    var que5 = document.getElementById("que5").checked;
    var que6 = document.getElementById("que6").checked;
    var que7 = document.getElementById("que7").checked;
    var que8 = document.getElementById("que8").checked;
    var que9 = document.getElementById("que9").checked;
    var que10 = document.getElementById("que10").checked;
    

    //Assign correct answers to field inputs
      if (que1) {
        correctAnswers += 1;
    } if (que2) {
        correctAnswers += 1;
    } if (que3) {
        correctAnswers += 1;
    } if (que4) {
        correctAnswers += 1;
    } if (que5) {
        correctAnswers += 1;
    } if (que6) {
        correctAnswers += 1;
    } if (que7) {
        correctAnswers += 1;
    } if (que8)  {
        correctAnswers += 1;
    }  if (que9) {
        correctAnswers += 1;
    }  if (que10) {
        correctAnswers += 1;
    } 

         //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 10) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 10 answers correct";}
    else if (correctAnswers >= 5) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 3) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1)John A Macdonald (2)Jawaharlal Nehru (3)Gregg Abott (4)Scott Morrison (5)Robert Walpole (6)Africa (7)India (8)Vatican City (9)Russia (10)Facebook ";

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}

