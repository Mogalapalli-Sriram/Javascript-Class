class CoordinatePoint {
    constructor(x,y) {
     this.x = x;
     this.y = y;
   }
 static Distance(a,b){
    const x1 = (a.x - b.x);
    const x2 = (a.y - b.y);
    return Math.hypot(x1,x2); 
 }
}

var point1 = new CoordinatePoint(2,3);
var point2 = new CoordinatePoint(5,7);
var distance = CoordinatePoint.Distance(point1,point2);
console.log("distance between two coordinate points is:" + distance);