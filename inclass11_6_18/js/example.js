// Steve Kim
// Steven_kim@student.uml.edu
// COMP4610: Inclass 6
// Date: 11.6.18

//alert("JS is attached to.");

// ADD NEW ITEM TO END OF LIST
// Append LI node to list
var list = document.getElementsByTagName("li");
list.four.outerHTML += "<li>cream</li>";

// ADD NEW ITEM START OF LIST
var ul_list = document.getElementsByTagName("ul");
var node = document.createTextNode("kale");



// ADD A CLASS OF COOL TO ALL LIST ITEMS
var list = document.getElementsByTagName('li');
for(var i = 0; i < list.length; ++i)
{
	var temp = list[i]
	temp.classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var header = document.getElementsByTagName('h2');
header[0].innerHTML = header[0].innerHTML + "  "  + list.length;
