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
export default CoordinatePoint;
