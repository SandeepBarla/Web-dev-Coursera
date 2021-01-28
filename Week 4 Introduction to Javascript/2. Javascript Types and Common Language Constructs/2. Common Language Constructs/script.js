// String Concatination
// var string='Hello';
// string+=' world';
// console.log(string+' !')


// // Math Operators
// console.log((5+4)/3);
// console.log(undefined/3); //Nan=NotaNumber
// function test1 (a){
// 	console.log(a/5);
// }
// test1();


// // Equality
// var x=4, y=4;
// if(x==y){
// 	console.log('x=4 is equal to y=4');
// }

// x='4';
// if(x==y){
// 	console.log("x='4' is equal to y=4");  //Type Coercion
// }


// // Strict Equality
// var x='4',y=4;
// if(x===y){
// 	console.log("x='4' is equal to y=4");  //Type Coercion
// }else{
// 	console.log("x='4' is not equal to y=4");
// }


// // If Statement (all false)
// if(false || null || undefined || "" || 0 || NaN){
// 	console.log('This line will never execute');
// }else{
// 	console.log('All false');
// }

// // If Statement (all true)
// if (true && 'Hello' && 1 & -1 && 'false') {
// 	console.log('All true');
// }


// // Best practice for {} style
// // Curly brace on the same line or next line
// // Is it just a style?
// function a(){
// 	return{
// 		name:'Yaakov'
// 	};
// }
// function b()
// {
// 	return //; is automatically kept here
// 	{
// 		name:'Yaako'
// 	};
// }
// console.log(a());
// console.log(b());


// For Loop
var sum=0;
for(var i=0;i<10;i++){
	console.log(i);
	sum+=i;
}
console.log('sum of 0 through 9 is: '+ sum);