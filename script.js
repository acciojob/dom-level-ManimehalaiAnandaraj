//your JS code here. If required.
function domlevelfind(level) {
	const element=document.getElementById("level");
	if(!element)
	{
		alert( "Element not found" + level +"not found");
	}
	let count=1;
	let current=element;
	while (current.parentNode) {
		count++;
		current += parrentNode;
	}
	alert("The level of the element is"+count);
}

