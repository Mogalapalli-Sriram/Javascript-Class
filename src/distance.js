import CoordinatePoint from './classes/CoordinatePoint.mjs';
let point1 = new CoordinatePoint(2,3);
let point2 = new CoordinatePoint(5,7);
let distance = CoordinatePoint.Distance(point1,point2);
console.log("distance between two coordinate points is:" + distance);
