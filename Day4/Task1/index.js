//Task1
const student={
    name:"Suresh",
    age:22,
    grade:"A",
    displayStudentDetails:function(){
        return `Name: ${this.name} Age: ${this.age} Grade: ${this.grade}`
    },
    addStudent:function(name,age,grade){
        this.name=name,
        this.age=age,
        this.grade=grade
    }
}
//student.addStudent("Pavan",22,"A");
console.log(student.displayStudentDetails());
