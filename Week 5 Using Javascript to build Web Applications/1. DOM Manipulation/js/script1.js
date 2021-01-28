// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello() {
	var input_name=document.getElementById("name").value;
	var result="<h2>Hello "+input_name+" !</h2>";
	document.getElementById("content").innerHTML=result;

	if(input_name==="student"){
		var title_name=document.querySelector("#title").textContent;
		title_name+=" & Lovin' it";
		document.querySelector("h1").textContent=title_name;
	}
}
