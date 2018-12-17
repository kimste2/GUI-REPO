var total_tiles = 100;
var word_score = 0;
function startGame()
{
    get_seven_tiles();
}

// returns 7 random tiles
 function get_seven_tiles()
 {
   $('.tile-row').empty();
   //console.log("Get me some tiles");
   // for loop to get 7 tiles
   for(var i = 1; i < 8; ++i)
   {
     var id = "tile" + String(i);
     //console.log("id is " + id);
     var s = ""
     //s += "<div id=\"" + id +  "\" class=\"rows\">\n";
     var t = get_single_tile();
     s += "<img src=\"../Images/" + t + "\" height=\"80\" width=\"80\" alt=\"" + t + "\" + class=\"tiles\"" + " id=\""+ id +"\">";
     //s += "\n</div>\n";

     $('.tile-row').append(s);
     //console.log("i is: " +i);
   }
 }

// returns a single random tile in the form of a string (such as "A.jpg")
function get_single_tile()
{
  // get random number between [1,27]
  // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  var random = Math.floor(Math.random() * (27 - 1) + 1);
  //console.log(random);

  // use random number to get a letter from numberToLetter associative array
  var letter = numberToLetter[random].value;
//  console.log("We got a " + letter );

    // check if we ran out of tiles
    if(total_tiles > 0)
    {

      //check if that letter's tile is free
      if(ScrabbleTiles[letter]["number-remaining"] != 0)
      {
      //  console.log( letter + " with, remaining " + ScrabbleTiles[letter]["number-remaining"]);
        // use letter to index ScrabbleTiles associative array
        var tile = ScrabbleTiles[letter];
        ScrabbleTiles[letter]["number-remaining"] = ScrabbleTiles[letter]["number-remaining"] - 1;
        total_tiles = total_tiles - 1;
      //  console.log("You got a " + tile.value);
      }
      else
      {
      //  console.log("Total tiles " + total_tiles);
      //  console.log("Get a different tile");
      //  alert("You need to get some different tile but you didn't do it yet.");
      }
    }
    else // ran out of game tiles
    {
      alert("We ran out of tiles. Game over. ");
    }

  return String(letter + ".jpg");
}

// function clears #tile-row and then gets seven new game tiles and is associated with a button click
function getNewTiles()
{
  console.clear();
//  console.log("Getting 7 new tiles");
  $('.tile-row').empty();
  // adding the tiles back since none are in play
  total_tiles = total_tiles + 7;
  get_seven_tiles();
}

// source" http://api.jqueryui.com/draggable/
 function move_tiles()
{
  var i;
  var tile_ids =["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7"];
  for(i = 0; i < tile_ids.length; ++i)
  {
    var temp_id = document.getElementById(tile_ids[i]);
    $(temp_id).draggable({
      accept: ".special"
    });

  }
  console.log("Tiles are draggable");
  // http://api.jqueryui.com/droppable/
  var board_id  = document.getElementById('tileBoard');
  $(board_id).droppable({
    drop: function() {
    console.log("Board is ready to go.");
  }
});
}

$('.tile-row').click(function(){
  move_tiles();
});

// $('.tile-row').click(function(){
//   console.log("Click!");
//   var div_id = this.id;
//   console.log("The id is " + div_id);
//   $( function() {
//     $( "#tile-row" ).draggable();
//   } );
// });
