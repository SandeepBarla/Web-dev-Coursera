// Object literals and "this"
var literalCircle={  //new Object();
	radius: 10,

	getArea: function () {
		var self=this;
		console.log(this);

		var incRadius = function (){
			// console.log(this);
			self.radius=20;
		};
		incRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius,2);
		// body...
	}
};
console.log(literalCircle.getArea());
