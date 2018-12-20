// Name: Steve Kim
// Email: steven_kim@student.uml.edu
// GUI 1: Homework 9 Scrabble
// Purpose: javascript functions for index.html
var total_tiles = 100;
var word_score = 0;
var total_score = 0;
var tile_hand = 0;
var tile_string = [];
var is_double_word = false;
var is_double_letter;
var word = "";
var temp_score = 0;
// function starts game
function startGame(){
    get_seven_tiles();
}

// returns 7 random tiles at the start of game
 function get_seven_tiles(){
   $('.tile-row').empty();
   //console.log("Get me some tiles");
   // for loop to get 7 tiles
   for(var i = 1; i < 8; ++i){
     var id = "tile" + String(i);
     //console.log("id is " + id);
     var s = "";
     //s += "<div id=\"" + id +  "\" class=\"rows\">\n";
     var t = get_single_tile();

     s += "<img src=\"../Images/" + t + "\" height=\"80\" width=\"80\" alt=\"" + t + "\" + class=\"tiles\"" + " id=\""+ id +"\">";
     //s += "\n</div>\n";

     $('.tile-row').append(s);
     //console.log("i is: " +i);
     tile_hand = 7;
     // function runs on click
     move_tiles();
   }

 }

// returns a single random tile in the form of a string (such as "A.jpg")
function get_single_tile(){
  // get random number between [1,27]
  // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  var random = Math.floor(Math.random() * (27 - 1) + 1);
  //console.log(random);

  // use random number to get a letter from numberToLetter associative array
  var letter = numberToLetter[random].value;
//  console.log("We got a " + letter );

    // check if we ran out of tiles
    if(total_tiles > 0){

      //check if there is that letter's tile is free
      if(ScrabbleTiles[letter]["number-remaining"] != 0){
      //  console.log( letter + " with, remaining " + ScrabbleTiles[letter]["number-remaining"]);
        // use letter to index ScrabbleTiles associative array
        var tile = ScrabbleTiles[letter];
      //  ScrabbleTiles[letter]["number-remaining"] = ScrabbleTiles[letter]["number-remaining"] - 1;
        total_tiles = total_tiles - 1;
      //  console.log("You got a " + tile.value);
      }
      else{
      //  console.log("Total tiles " + total_tiles);
      //  console.log("Get a different tile");
      //  alert("You need to get some different tile but you didn't do it yet.");
      }
    }
    else{ // ran out of game tiles
      alert("We ran out of tiles. Game over. ");
    }

  return String(letter + ".jpg");
}

// function clears #tile-row and then gets seven new game tiles and is associated with a button click
function getNewTiles(){
  console.clear();
//  console.log("Getting 7 new tiles");
  $('.tile-row').empty();
  // adding the tiles back since none are in play
  total_tiles = total_tiles + 7;
  get_seven_tiles();
}

// source: http://api.jqueryui.com/draggable/
// function allows for the seven letter tiles to be "draggable" after a click event
// also adds droppable to the game board.
 function move_tiles(){
  var i;
  var tile_ids =["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7"];
  for(i = 0; i < tile_ids.length; ++i){
    // var temp_id = document.getElementById(tile_ids[i]);
    //console.log($("#"+tile_ids[i]));
    $("#"+tile_ids[i]).draggable({
      accept: ".special",
      appendTo: tileBoard,
    });
  }

  // http://api.jqueryui.com/droppable/
  var board_id  = 'tileBoard';
  $("#"+board_id).children().droppable({
    drop: function(event, ui){
      // get letter
      var tile_index = ui.draggable.index();
      var board_index = $(this).index();
      var temp_id = document.getElementById(tile_ids[tile_index]);
    //  console.log("Should see a letter: " + temp_id.alt.split(".jpg"));
      tile_string[board_index] = temp_id.alt.split(".jpg")[0];
      // source: https://stackoverflow.com/questions/33392307/what-does-the-reduce-javascript-function-do
      word = tile_string.reduce(function(str, letter){
        if(typeof letter === "string")
          return str + letter;
        return str;
      }, "")
    //  console.log("word is " + word);
    }
  });
}

// funciton computers word score and updates a total score, then prints
// it out
function submitWord(){
  var i;
  for(i = 0; i < tile_string.length; ++ i){
    //console.log(typeof(tile_string[i]));
    if(tile_string[i] != null){
      var letter = tile_string[i];
      console.log("Letter is " + letter);


      var letter_score = ScrabbleTiles[letter]["value"];

      if(is_double_letter == i){
        console.log("double it");
        letter_score = 2 * letter_score;
        is_double_letter = -1;
        console.log("double score is " + letter_score);
      }
      console.log("Letter score is " + letter_score);
      word_score += letter_score;
    }
  }

  if(is_double_word == true){
    word_score = word_score * 2;
    is_double_word = false;
    console.log("Double word score is " + word_score);
  }

  console.log("Word score is " + word_score);
  total_score += word_score;
  word_score = 0;
  tile_string = [];
  console.log("Total score is " + total_score);

  $("#Score").replaceWith("<div id=\"Score\">\nScore is now " + String(total_score) + " with word: " +  word + "</div>");
  replace_tiles(tile_string.length);
  clear_board();

}

// replaces tiles used to make word
function replace_tiles(number){
  console.log("Need to replace " + number + " tiles.");

}

// function clears board
function clear_board(){
  //alert("clear-board");
}
// funciton for double word event
function drop_on_double_word(event){
  is_double_word = true;
}

// function for double letter drop event
function drop_on_double_letter(event){
//  console.log('double letter!');
  // need to get letter droppped on top
  is_double_letter = tile_string.length;
//  console.log("double letter score at " + is_double_letter);

}

function quit(){
//  var message = "Quiting game.\nYour score is " + score;
  //alert("Quit");
  location.reload();
}

$("document").ready(function(){
  move_tiles();
})
