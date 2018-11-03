function mult_table()
{
	// get local variables from HTML
	console.log("Mult table function");
	var h_start, h_end, v_start, v_end;
	h_start = document.getElementById("horizontalStart").value;
	h_end = document.getElementById("horizontalEnd").value;
	v_start = document.getElementById("verticalStart").value;
	v_end = document.getElementById("verticalEnd").value;
	console.log("h_start has " + h_start);
	console.log("h_end has " + h_end);
	console.log("v_start has " + v_start);
	console.log("v_end has " + v_end);

	var table = "<table>\n\t"
	console.log(table);
	// make a table
	var i, j;
	for(i = h_start; i != h_end; ++i)
	{
		table += "<tr\n>";
		for(j = v_start; j != v_end; ++j)
		{
			table += "<th>\n\t" + (i * j) + "/n</tr>/n";
		}
		table += "</tr>\n"
	}

	console.log(table);

	// assign product to each element as necessary





}

function check_input(p1)
{
	if(isNan(p1) || p1 < 0 || p1 > 1000)
	{
		alert("The number must be between 0 and 1000.");
	}

}
//mult_table();
