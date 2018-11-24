// Name: Steve Kim
// Email: steven_kim@student.uml.edu
// COMP 4610: Assignment 7
// Date: 11.20.18
// Description: makes a multiplication table from user input

var end_limit = 50;
var start_limit = 0;
var h_start, h_end, v_start, v_end;
function mult_table()
{
	// get local variables from HTML
	console.log("Mult table function");
  h_start = document.getElementById("horizontalStart").value;
	h_end = document.getElementById("horizontalEnd").value;
	v_start = document.getElementById("verticalStart").value;
	v_end = document.getElementById("verticalEnd").value;

	if(parseInt(h_start) > parseInt(h_end)){
		alert("error");
		var temp = h_start;
		h_start = h_end;
		h_end = temp;
	}

	if(parseInt(v_start) > parseInt(v_end)){
		alert("error");
		var temp = v_start;
		v_start = v_end;
		v_end = temp;
	}
	console.log("h_start has " + h_start);
	console.log("h_end has " + h_end);
	console.log("v_start has " + v_start);
	console.log("v_end has " + v_end);

	var table = "<table class=\"mult_table\">\n<tbody>\n"
	//console.log(table);
	// make a table
	var i, j;
 	table += "<tr>\n"

	// intentionally left blank
	table += "<td></td>\n"

	for(j = parseInt(h_start); j <= parseInt(h_end); ++j)
	{
		table += "<td> " + parseInt(j) + "</td>\n";
	}
	table += "</tr>"

	for(i = parseInt(v_start); i <= parseInt(v_end); ++i)
	{
//		table += "\t<tr>\n";
		table += "<td> " + parseInt(i) +  "</td>\n";
		for(j = parseInt(h_start); j <= parseInt(h_end); ++j)
		{
			//console.log( i + "|" + j + " = " + (i *j));
			table += "\t\t<td>" + (parseInt(i) * parseInt(j)) + "</td>\n";
		}
		table += "\t</tr>\n"
	}
  table += "</tbody></table>\n";
	//console.log(table);
	document.getElementById("table").innerHTML = table;

}



// //ensures all values of form are between [0,50]
var validtor = $("#numbers").validate({
		rules: {
			number: {
				required: true,
				min: 0,
				max: 50,
				number: true
			},

		}, // end of rules
		messages: {
			number: "This is a required field, please ensure you number is between 0 and 50."
		}

}); // end of validate


$('#button').on('click', function() {
	$("#numbers").valid();
	alert("Do you have what you want?\n" + $("#horizontalStart").val() + " : " + $("#horizontalEnd").val() + "\n" + $("#verticalStart").val() + " : " + $("#verticalEnd").val());
	mult_table();
});
