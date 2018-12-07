var total_tiles = 100;
var random_number;
// returns 7 random tiles
 function get_seven_tiles()
 {
   console.log("Get me seven tiles");
   random_number = Math.random();
   console.log("Random number is " + random_number);
   total_tiles = total_tiles - 7;
 }
get_seven_tiles();
