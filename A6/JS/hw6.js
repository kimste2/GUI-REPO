// Name: Steve Kim
// Email: steven_kim@student.uml.edu
// COMP 4610: Assignment 6
// Date: 11.1.18
// Description: makes a multiplication table from user input
var end_limit = 50;
var start_limit = 0;
var h_start, h_end, v_start, v_end;
function mult_table()
{
	// get local variables from HTML
//	console.log("Mult table function");

	h_start = document.getElementById("horizontalStart").value;
	check_input_lower(h_start, "horizontal starting number ");
	h_end = document.getElementById("horizontalEnd").value;
	check_input_upper(h_end, "Horizontal end ", h_start);
	v_start = document.getElementById("verticalStart").value;
	check_input_lower(v_start, "Vertical starting number ");
	v_end = document.getElementById("verticalEnd").value;
	check_input_upper(v_end, "Vertical ending number ", v_start);
	//console.log("h_start has " + h_start);
	//console.log("h_end has " + h_end);
	//console.log("v_start has " + v_start);
	//console.log("v_end has " + v_end);

	var table = "<table class=\"mult_table\">\n<tbody>\n"
	//console.log(table);
	// make a table
	var i, j;
 	table += "<tr>\n"

	// intentionally left blank
	table += "<td></td>\n"

	for(j = h_start; j <= h_end; ++j)
	{
		table += "<td> " + j + "</td>\n";
	}
	table += "</tr>"

	for(i = v_start; i <= v_end; ++i)
	{
//		table += "\t<tr>\n";
		table += "<td> " + i +  "</td>\n";
		for(j = h_start; j <= h_end; ++j)
		{
		//	console.log( i + "|" + j + " = " + (i *j));
			table += "\t\t<td>" + (i * j) + "</td>\n";
		}
		table += "\t</tr>\n"
	}
  table += "</tbody></table>\n";
//	console.log(table);
	document.getElementById("table").innerHTML = table;

}

// Parameters for check_input_lower:
	// p1 is the number that is being checked
	// p2 is a string name for the id for p1
function check_input_lower(p1, p2)
{
		if(isNaN(p1) || p1 < start_limit || p1 > end_limit)
		{
			alert(p2 + "must be a number between " + start_limit + " and " + end_limit + ".");
		//	var error = "Restart webpage";
		//	document.getElementById("error").innerHTML = error;
		}

} // end of check_input_lower funciton


// Parameters for check_input_lower:
	// p1 is the number that is being checked
	// p2 is a string name for the id for p1
	// p3 is the lower limit
function check_input_upper(p1, p2 , p3)
{
	if(isNaN(p1) ||  p1 < start_limit || p1 > end_limit || p1 < p3)
	{
		alert(p2 + "must be a number between " + start_limit + " and " + end_limit + " as well as be larger than " + p3 + ".");
	//	var error = "Restart webpage";
	//	document.getElementById("error").innerHTML = error;
	}

} // end of check_input_upper function
