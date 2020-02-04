class Employee{
constructor(name, id, email){
    if (name.length==0) {
        throw new Error("NAME should be a non-empty string");
      }
     if (id.length==0) {
        throw new Error("ID should be a non-empty");
      }
      if (email.length==0 || !email.includes("@")) {
        throw new Error("EMAIL should be non-empty string contains @ sign");
      }
    this.name=name;
    this.id=id;
    this.email=email;
}

getName(){
return `${this.name}`;
}
getId(){
    return `${this.id}`;
}
getEmail(){
return `${this.email}`;
}
setRole(role){
    this.role=role;
}
getRole(){
return `${this.role}`;
}


}
module.exports = Employee;