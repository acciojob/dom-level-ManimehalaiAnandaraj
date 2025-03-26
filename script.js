//your JS code here. If required.
function domlevelfind(level) {
	const element=document.getElementById("level");
	if(!element)
	{
		return "Element not found"
	}
	let count=1;
	let current=element;
	while (current.parentNode) {
		count++;
		current += parrentNode;
	}
	return count;
}

const elemid="count";
const domlevel=domlevelfind(elemid);
if(domlevel !== "Element not found")
{
	alert("The level of the element is: " +domlevel);
}

else
{
	alert(domlevel)
}



