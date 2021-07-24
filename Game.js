Player1_name = localStorage.getItem("player1");
Player2_name = localStorage.getItem("player2");
Player1_score = 0;
Player2_score = 0;

document.getElementById("player1_name").innerHTML = Player1_name+" : ";
document.getElementById("player2_name").innerHTML = Player2_name+" : ";

document.getElementById("player1_score").innerHTML = " "+Player1_score;
document.getElementById("player2_score").innerHTML = " "+Player2_score;

document.getElementById("players_question").innerHTML = "Question turn - "+Player1_name;
document.getElementById("players_answer").innerHTML = "Answer turn - "+Player2_name;

function send(){
   get_word = document.getElementById("word").value;
   word = get_word.toLowerCase();
   console.log(word);

   letter_1 = word.charAt(1);
   length_divide_2 =  Math.floor(word.length/2);
   letter_2 = word.charAt(length_divide_2);
   length_minus_1 = word.length-1;
   letter_3 = word.charAt(length_minus_1);

   console.log(letter_1);
   console.log(letter_2);
   console.log(letter_3);

   remove_letter_1 = word.replace(letter_1,"_");
   remove_letter_2 = remove_letter_1.replace(letter_2,"_");
   remove_letter_3 = remove_letter_2.replace(letter_3,"_");

   console.log(remove_letter_1);
   console.log(remove_letter_2);
   console.log(remove_letter_3);

   Question_word = "<h4 id = 'word_display'> Q. "+remove_letter_3+"</h4><br>";
   input_box = "Answer:<input type='text' id='input_checkbox' placeholder='Type Your Answer'><br>";
   check_button = "<br><button class='btn btn-info' onclick='check()'> Check </button>";
   row = Question_word+input_box+check_button;

   document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = "";
}

Question_turn = "player1";
Answer_turn = "player2";

function check() {
    getanswer = document.getElementById("input_checkbox").value;
    answer = getanswer.toLowerCase();
    console.log(answer+" - this is the answer in lowercase")
    if(answer == word){
       if(Answer_turn == "player2"){
          Player2_score = Player2_score + 1;
          document.getElementById("player2_score").innerHTML = Player2_score;
       }
       else{
         Player1_score = Player1_score + 1;
         document.getElementById("player1_score").innerHTML = Player1_score;
       }    
    }
   
    if(Question_turn == "player1"){
       Question_turn = "player2";
       document.getElementById("players_question").innerHTML ="Question turn - "+Player2_name;
    }
    else{
       Question_turn = "player1";
       document.getElementById("players_question").innerHTML ="Question turn - "+Player1_name;
    }

    if(Answer_turn == "player2"){
      Answer_turn = "player1";
      document.getElementById("players_answer").innerHTML ="Answer turn - "+Player1_name;
   }
   else{
      Answer_turn = "player2";
      document.getElementById("players_answer").innerHTML ="Answer turn - "+Player2_name;
   }

   document.getElementById("output").innerHTML = "";
}

