function Circle(radius) {
	this.radius=radius;
	// return {};
// 	this.getArea= function(){
// 		return Math.PI * Math.pow(this.radius,2);
// 	};
}
Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this.radius,2);
	// body...
};
var a= new Circle(10);
console.log(a);

var b=new Circle(100);
console.log(b);