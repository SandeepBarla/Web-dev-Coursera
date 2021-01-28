// // Copy by value
// var a=7;
// var b=a;
// console.log('a: '+a);
// console.log('b: '+b);

// b=5;
// console.log("after b update: ");
// console.log('a: '+a);
// console.log('b: '+b);



// var a= {x:7};
// var b=a;
// console.log(a);
// console.log(b);

// b.x=5;
// console.log("after b.x update: ");
// console.log(a);
// console.log(b);



// // Passing by value
// function passValue(primvalue){
// 	console.log('in passValue......');
// 	console.log('primvalue before update: '+primvalue);

// 	primvalue=5;
// 	console.log('primvalue after update: '+primvalue);

// }
// var value=7;
// passValue(value); //primvalue=value
// console.log('value after update: '+value);

// Passing by reference
function passObject(objValue){
	console.log('in passObject......');
	console.log('objValue before update: ');
	console.log(objValue);

	objValue.x=5;
	console.log('objValue after update: ');
	console.log(objValue);

}
var value={x:7};
passObject(value); //primvalue=value
console.log('value after update: ');
console.log(value);
