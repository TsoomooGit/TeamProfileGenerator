const Employee = require("./employee");

class Manager extends Employee{
constructor(name, id, email, officeNumber){
    if(officeNumber.length==0){
        throw new Error("OFFICE NUMBER should be a non-empty string");
    }
    super(name,id, email);
    super.setRole("Manager");
    this.officeNumber=officeNumber;
}



setOfficeNumber(officeNumber){
    this.officeNumber=officeNumber;
}

getOfficeNumber(){
    return `${this.officeNumber}`;
}


}


module.exports = Manager;