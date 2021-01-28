(function (){
		var sandeepGreeter={};
	sandeepGreeter.name='Sandeep';
	var greeting="Hi ";
	sandeepGreeter.sayHi= function(){
		// console.log(this);
		console.log(greeting+this.name);
	};
	window.sandeepGreeter=sandeepGreeter; //exposed sandeepGreeter to windows
})();

