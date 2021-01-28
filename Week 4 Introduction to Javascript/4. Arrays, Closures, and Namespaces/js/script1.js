// // Arrays
// var array=new Array();
// array[0]='Sandeep';
// array[1]=2;
// array[2]=function (name) {
// 	console.log("Hello "+ name);
// 	// body...
// };
// array[3]={
// 	course: 'HTML,CSS,JS'
// };
// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);



// // Short Hand Array Creation
	// var names=[
	// {name:'Yaakov'},
	// {name:'John'},
	// 'Joe'];
	// console.log(name);

// var names=["Yaakov","John","Joe"];
// console.log(names);
// // for(var i in name){
// // 	console.log(name[i]);
// // }
// // for(var i=0;i<names.length;i++){
// // 	console.log('Hello '+names[i]);
// // }

// names[100]="jim";

// for(var i=0;i<names.length;i++){
// 	console.log('Hello '+names[i]);
// }



var names2=["Yaakov","Joe","John"];

// var myObj={
// 	name: 'Yaakov',
// 	course:"HTML",
// 	platform:'Coursera'
// };

// for (var prop in myObj){
// 	console.log(prop+": "+myObj[prop]);
// }
names2.greeting='Hi';
for (var name in names2){
	console.log("Hello "+names2[name]);
}
