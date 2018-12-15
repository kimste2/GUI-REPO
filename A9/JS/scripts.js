var total_tiles = 100;

function startGame()
{
    get_seven_tiles();
}

// returns 7 random tiles
 function get_seven_tiles()
 {
   console.log("Get me some tiles");
   // for loop to get 7 tiles
   for(var i = 1; i < 8; ++i)
   {
     var id = "tile" + i;
     var s = "<div id=\"" + id +  "\" class=\"rows\" class=\"movable\">\n";
     var t = get_single_tile();
     s += "<img src=\"../Images/" + t + "\" height=\"80\" width=\"80\" alt=\"" + t + "\">\n";
     s += "</div>\n";

     $('#tile-row').append(s);
     console.log("i is: " +i);
   }
 }

// returns a single random tile in the form of a string (such as "A.jpg")
function get_single_tile()
{
  // get random number between [0,27]
  // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  var random = Math.floor(Math.random() * (23 - 1) + 1);
  console.log(random);

  // use random number to get a letter from numberToLetter associative array
  var letter = numberToLetter[random].value;
  console.log("We got a " + letter );

    // check if we ran out of tiles
    if(total_tiles != 0)
    {
      total_tiles -= 1;
      //check if that letter's tile is free
      if(ScrabbleTiles[letter]["number-remaining"] > 0)
      {
        // use letter to index ScrabbleTiles associative array
        var tile = ScrabbleTiles[letter];
        console.log("You got a " + tile.value);
      }
      else
      {
        console.log("Get a different tile");
      }
    }
    else
    {
      alert("We ran out of tiles. Game over. ");
    }


  return String(letter + ".jpg");
}

("").on("")
