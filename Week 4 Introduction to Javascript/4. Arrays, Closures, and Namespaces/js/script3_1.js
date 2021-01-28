// var name='Sandeep';
// function sayHi() {
// 	console.log('Hi '+name);
// }

var sandeepGreeter={};
sandeepGreeter.name='Sandeep';
sandeepGreeter.sayHi= function(){
	// console.log(this);
	console.log("Hi "+this.name);
};