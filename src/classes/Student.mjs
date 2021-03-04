class Student {
  constructor(firstName, lastName,scores) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.absentDay = 0;
    this.SubjectScores = scores;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.absentDay += 1;
    if (this.absentDay >= 3) {
      return "YOU ARE EXPELLED!!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.absentDay} times`;
  }
  
  calculateAverage() {
    let sum = this.SubjectScores.reduce(function(a, b) {
      return a + b;
    })
    return `Average score of ${this.SubjectScores.length} subjects of ${this.firstName} is ${sum / this.SubjectScores.length}`;
  }
    
  static Enroll() {
    return "enrolled the details";
  }
}

export default Student;
