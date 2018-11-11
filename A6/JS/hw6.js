// Name: Steve Kim
// Email: steven_kim@student.uml.edu
// COMP 4610: Assignment 6
// Date: 11.1.18
// Description: makes a multiplication table from user input

function mult_table()
{
	// get local variables from HTML
	console.log("Mult table function");
	var h_start, h_end, v_start, v_end;
	h_start = document.getElementById("horizontalStart").value;
	check_input_lower(h_start, "horizontalStart");
	h_end = document.getElementById("horizontalEnd").value;
	v_start = document.getElementById("verticalStart").value;
	v_end = document.getElementById("verticalEnd").value;
	//console.log("h_start has " + h_start);
	//console.log("h_end has " + h_end);
	//console.log("v_start has " + v_start);
	//console.log("v_end has " + v_end);

	var table = "<table>\n"
	//console.log(table);
	// make a table
	var i, j;
 	table += "<tr>\n"
	table += "<td></td>"
	for(j = h_start; j <= h_end; ++j)
	{
		table += "<td>" + j + "</td>\n";
	}
	table += "</tr>"

	for(i = v_start; i <= v_end; ++i)
	{
//		table += "\t<tr>\n";
		table += "<td>" + i + "</td>\n";
		for(j = h_start; j <= h_end; ++j)
		{
		//	console.log( i + "|" + j + " = " + (i *j));
			table += "\t\t<td>" + (i * j) + "</td>\n";
		}
		table += "\t</tr>\n"
	}
  table += "</table>\n";
//	console.log(table);
	document.getElementById("table").innerHTML = table;

}

function check_input_lower(p1, p2)
{
		var end_limit = 50;
		var start_limit = 0;

		if(isNaN(p1) || p1 < start_limit || p1 > end_limit)
		{
		  alert(p2 + " must be a number between " + start_limit + " and " + end_limit);
		}

} // end of check_input_lower funciton

function check_input_upper()
{


} // end of check_input_upper function
