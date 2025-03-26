//your JS code here. If required.
function domlevelfind(level) {
	const element=document.getElementById("level");
	if(!element)
	{
		return "Element not found"
	}
	let level=1;
	let current=element;
	while (current.parentNode) {
		level++;
		current += parrentNode;
	}
	return level;
}

const elemid="level";
const domlevel=domlevelfind(elemid);
if(domlevel !== "Element not found")
{
	alert("The level of the element is: " +domlevel);
}

else
{
	alert(domlevel)
}


