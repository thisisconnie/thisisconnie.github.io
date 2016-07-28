(function() 
{
	var length = 4;
	var width = 8;
	var height = 1;

	var i = 0;
	var j = 0;
	var k = 0;

	for (i = 0; i < length; i++) 
	{ 
		for (j = 0; j < width; j++) 
		{
			for (k = 0; k < height; k++)
			{
				var xOff = Math.random() * (.2 - (-.2)) + (-.2);
				//var yOff = Math.random() * (.2 - (-.2)) + (-.2);
				var zOff = Math.random() * (.1 - (-.1)) + (-.1);

				var x = -.25;
				var y = .24;
				var z = -.3;

				x += xOff;
				//y += yOff;
				z += zOff;

				x += j * .07;
				y += k * .1;
				z += i * .2;

				var pos = "" + x + " " + y + " " + z;

				var sphere = "<a-sphere color=\"yellow\" radius=\".1\" position=\"" + pos + "\" >";

				var entity = document.getElementById("gold");
				entity.innerHTML += sphere; /* This style is not recommended*/ /*Writes directly to the document*/
			}
		}
	}

})();
/*
innerHTML += sphere // --> tries to autoformat your inputs as they come in  
innerHTML += "<table>" //--> innerHTML += "<table> </table>"
innerHTML += "<td> <tr " // --> probably ignores innerHTML += "<td>"
//Want to have a complete String so innerHTML doesn't auto close it for you
*/