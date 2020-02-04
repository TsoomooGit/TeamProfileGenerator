const Employee = require("./Employee");

class Intern extends Employee{
constructor(name, id, email,school){
    if(school.length==0){
        throw new Error("School name should be a non-empty string");
    }
super(name, id, email,);
super.setRole("Intern");
}
setSchool(school){
    this.school=school;
}
getSchool(){
return `${this.school}`;
}

}

module.exports = Intern;
