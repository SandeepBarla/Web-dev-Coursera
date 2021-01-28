// // Object Creation
// var company= new Object();
// company.name='Facebook';
// company.ceo=new Object();
// company.ceo.firstName='Mark';
// company.ceo.favColor='gray';

// console.log(company);
// console.log('Company CEO name is: '+ company.ceo.firstName);
// console.log(company['name']);

// // company.stock of company=110;
// // company['stock of company']=110;

// var stockPropName='stock of company';
// company[stockPropName]=120;
// console.log('Stock of the company is: '+
// 	company['stock of company']);


// Better way: Object literal
var company={
	name:'Facebook',
	CEO:{
		firstName:'Mark',
		favColor:'blue'
	},
	'stock of company':150
};
console.log(company);
console.log(company.CEO.firstName);