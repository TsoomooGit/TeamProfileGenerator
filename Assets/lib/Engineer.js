const Employee = require("./Employee");
class Engineer extends Employee{
constructor(name, id, email,githubUsername){
    if(githubUsername.length==0){
        throw new Error("Github username should be a non-empty string");
    }
    super(name, id, email,);
    super.setRole("Engineer");
    this.githubUsername=githubUsername;
}
setGitHubUserName(githubUsername){
    this.githubUsername=githubUsername;
}
getGitHubUsername(){
    return  `${this.githubUsername}`;
}
}

module.exports = Engineer;