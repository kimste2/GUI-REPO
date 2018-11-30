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
	//console.log("Mult table function");
  h_start = document.getElementById("horizontalStart").value;
	h_end = document.getElementById("horizontalEnd").value;
	v_start = document.getElementById("verticalStart").value;
	v_end = document.getElementById("verticalEnd").value;

	if(parseInt(h_start) > parseInt(h_end)){
		//alert("error");
		var temp = h_start;
		h_start = h_end;
		h_end = temp;
	}

	if(parseInt(v_start) > parseInt(v_end)){
	//	alert("error");
		var temp = v_start;
		v_start = v_end;
		v_end = temp;
	}
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
let baseRules = {
  required: true,
  min: 0,
  max: 50,
  digits: true,
};
var validtor = $("#numbers").validate({
		rules: {
			horizontalStart: baseRules,
  		horizontalEnd: baseRules,
    	verticalStart: baseRules,
      verticalEnd: baseRules

		}, // end of rules
		messages:{
			horizontalStart: "Please enter a number less than the (horizontal) ending number and between 0 and 50.",
			horizontalEnd: "Please enter a number greater than the (horizontal) starting number and between 0 and 50.",
			verticalStart:"Please enter a number less than the (vertical) ending number and between 0 and 50.",
			verticalEnd: "Please enter a number greater than the (vertical) starting number and between 0 and 50. ",
		},

}); // end of validate

$("#horizontalEnd").on({
	"input":function(){console.log("input");
		var f = parseInt($("#horizontalStart").val());
		var g = parseInt($("#horizontalEnd").val());
		if (f > g)
		{
			console.log("F is bigger than g. What to do now?");
				$("#horizontalStart").validate();
		}

	}
});

$("#verticalEnd").on({
	"input":function(){console.log("input");
		var h = parseInt($("#verticalStart").val());
		var i = parseInt($("verticalEnd").val());
		if (h > i)
		{
			console.log("F is bigger than g. What to do now?");
		}

	}
});


$('#button').on('click', function() {
	$("#numbers").validate();
	//alert("Do you have what you want?\n" + $("#horizontalStart").val() + " : " + $("#horizontalEnd").val() + "\n" + $("#verticalStart").val() + " : " + $("#verticalEnd").val());
	mult_table();
});
