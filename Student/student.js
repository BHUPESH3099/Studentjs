class student {
  constructor(firstName,lastName,marks,) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + " " + lastName
    this.marks = marks
    this.grade = []

    if (typeof firstName != "string") {
      console.log("Please enter valid first name");
      return;
    }

    if (typeof lastName != "string") {
      console.log("Please enter valid last name");
      return;
    }

   

    if (typeof marks != "object" ) {
      console.log("Please enter valid marks")
      return;
    }

  
    

    
    let sum = 0
    for (let i = 0; i < marks.length; i++) {
      sum = sum + marks[i]
    }
    this.finalMarks = sum / this.marks.length

    

    for (let i = 0; i < marks.length; i++) {
      let pointer = Math.floor(this.marks[i])

      this.marks[i] = this.convertToGrade(pointer)
    }

    
    let avgPointer = Math.floor(this.finalMarks)
    this.finalGrade = this.convertToGrade(avgPointer)

    
  }

  convertToGrade = function (pointer) {
    switch (pointer) {
      case 9:
        return "A"
        break;

      case 7:
        return "B"
        break

      case 5:
        return "C"
        break

      case 3:
        return "D"
        break

      

      default:
        return "Please enter valid marks"
    }
  }

  
  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName
  }

  getFullName() {
    return this.fullName
  }

  getmarks() {
    return this.marks
  }

  getFinalMarks() {
    return this.finalMarks
  }

  geGrade() {
    return this.grade
  }

  getFinalGrade() {
    return this.finalGrade
  }

  

  
  displayFirstName() {
    console.log("First Name: ", this.firstName);
  }

  displayLastName() {
    console.log("Last Name: ", this.lastName);
  }

  displayFullName() {
    console.log("Full Name: ", this.fullName);
  }

  

  displaymarks() {
    console.log("Marks: ", this.marks);
  }

  displayFinalMarks() {
    console.log("Final Marks: ", this.finalMarks);
  }

  displayGrade() {
    console.log("Grade: ", this.grade);
  }

  displayFinalGrade() {
    console.log("Final Grade: ", this.finalGrade);
  }



 
  setFirstName(name) {
    if (typeof name != "string") {
      console.log("Please enter valid first name");
      return;
    }

    this.firstName = name;


    this.setFirstNameOfFullName(this.firstName);
    return;
  }

  setLastName(name) {
    if (typeof name != "string") {
      console.log("Please enter valid last name");
      return;
    }

    this.lastName = name;
    this.setLastNameOfFullName(this.lastName);
    return;
  }

  setFirstNameOfFullName(name) {
    let array = this.fullName.split(" ");

    let lname = array[1];

    this.fullName = name + " " + lname;
    return;
  }

  setLastNameOfFullName(name) {
    let array = this.fullName.split(" ");

    let fname = array[0];

    this.fullName = fname + " " + name;
    return;
  }

  setMarks(marks) {
    if (typeof marks != "object" ) {
      console.log("Please enter valid marks");
      return;
    }

    this.marks = marks;

    
    this.setFinalMarks(marks);

    
    this.setGrade(this.marks);
    return;
  }

  setFinalMarks(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum = sum + marks[i];
    }
    this.finalMarks = sum / this.marks.length;

    this.setFinalGrade(this.finalMarks);
    return;
  }

  setGrade(marks) {
    this.marks = [];

    for (let i = 0; i < marks.length; i++) {
      let pointer = Math.floor(this.marks[i]);

      this.grade[i] = this.convertToGrade(pointer);
    }

    return;
  }

  setFinalGrade(finalMarks) {
    let avgPointer = Math.floor(finalMarks);
    this.finalGrade = this.convertToGrade(avgPointer);
    return;
  }

  


  get(param) {
    switch (param) {
      case "firstName":
        return this.getFirstName();
        break;

      case "lastName":
        return this.getLastName();
        break;

      case "fullName":
        return this.getFullName();
        break;

      case "marks":
        return this.getmarks();
        break;

      case "finalMarks":
        return this.getFinalMarks();
        break;

      case "grade":
        return this.getGrade();
        break;

      case "finalGrade":
        return this.getFinalGrade();
        break;

      
      default:
        return "Please enter valid input";
    }
  }

 
  update(param, value) {
    switch (param) {
      case "firstName":
        this.setFirstName(value);
        break;

      case "lastName":
        this.setLastName(value);
        break;

      case "marks":
        this.setmarks(value);
        break;

      default:
        return "Please enter valid inputs";
    }
  }


  display(param) {
    switch (param) {
      case "firstName":
        this.displayFirstName();
        break;

      case "lastName":
        this.displayLastName();
        break;

      case "fullName":
        this.displayFullName();
        break;

      case "marks":
        this.displaymarks();
        break;

      case "finalMarks":
        this.displayFinalSMarks();
        break;

      case "grade":
        this.displayGrade();
        break;

      case "finalGrade":
        this.displayFinalGrade();
        break;

      default:
        return "Please Enter Valid input"

     
    }
  }
}

let bhupesh = new student("Bhupesh","Jha",[5,6,7,8,3])

console.log(bhupesh)

