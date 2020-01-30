const Employee = require("./Employee");
class Engineer extends Employee{
constructor(name, id, email,githubUsername){
    super(name, id, email,);
    super.setRole("Engineer");
}
setGitHubUserName(username){
    this.username=username;
}
getGitHubUsername(){
    return  `${this.username}`;
}
}

module.exports = Engineer;