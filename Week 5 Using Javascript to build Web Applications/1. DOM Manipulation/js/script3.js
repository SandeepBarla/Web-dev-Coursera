document.addEventListener("DOMContentLoaded",
	function (event){
		function sayHello(event) {
			// console.log(event);
			this.textContent="said it";
			var input_name=document.getElementById("name").value;
			var result="<h2>Hello "+input_name+" !</h2>";
			document.getElementById("content").innerHTML=result;

			if(input_name==="student"){
				var title_name=document.querySelector("#title").textContent;
				title_name+=" & Lovin' it";
				document.querySelector("h1").textContent=title_name;
			}
		}

		// document.querySelector("button").addEventListener("click",sayHello)
		document.querySelector("button").onclick=sayHello;

		document.querySelector("body")
		.addEventListener("mousemove",
				function(event){
					if(event.shiftKey==true){
						console.log("X: "+ event.clientX);
						console.log("Y: "+ event.clientY);
					}

				}
			);


	}

	);