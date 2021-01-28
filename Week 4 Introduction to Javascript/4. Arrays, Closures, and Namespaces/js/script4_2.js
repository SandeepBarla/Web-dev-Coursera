(function (){
		var yaakovGreeter={};
	yaakovGreeter.name='Yaakov';
	var greeting="Hello ";
	yaakovGreeter.sayHello= function(){
		console.log(greeting+this.name);
	};
	window.yaakovGreeter=yaakovGreeter;
})();

