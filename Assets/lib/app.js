const fs = require("fs");
const inquirer = require('inquirer');
const promt = require('prompt-async');
const chalk = require('chalk');

const Manager= require("./manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

getPromt();

var arr=[];
    
function getPromt(){
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Employee role?',
       choices: ['Manager', 'Engineer','Intern','Done'],
      }
     ])
     
.then(answers =>{
       var selected=answers.role;
            if(selected=="Intern"){
                promt.get(["Name","ID","Email","School"], (error,result) => {
                    if(error)
                    {
                        throw Error(error);
                    }
                   const intern = new Intern(result.Name,result.ID,result.Email,result.School);
                   intern.setSchool(result.School);
                    var icon ="<i class=\"fas fa-user-graduate\"></i>";
                    arr.push(partialHtml(intern.getName(), icon+intern.getRole(),intern.getId(), intern.getEmail(),"School: "+ intern.getSchool()));
                    getPromt();
            })
            
            } if(selected=="Engineer"){
                promt.get(["Name","ID","Email","Github"], (error, result) => {
                    if(error)
                    {
                        throw Error(error);
                    }
                    const engineer = new Engineer(result.Name,result.ID,result.Email,result.Github);
                    engineer.setGitHubUserName(result.Github);
                    var icon ="<i class=\"fas fa-glasses\"></i>";
                     arr.push(partialHtml( engineer.getName(), icon+engineer.getRole(), engineer.getId(), engineer.getEmail(),"Github: "+ engineer.getGitHubUsername()));
                    getPromt();
            })
        }
             if(selected=="Manager"){
                promt.get(["Name","ID","Email","officeNumber"], (error,result) => {
                    if(error)
                    {
                        throw Error(error);
                    }
                    const mngr = new Manager(result.Name,result.ID,result.Email,result.officeNumber);
                    mngr.setOfficeNumber(result.officeNumber);
                    var icon ="<i class=\"fas fa-mug-hot\"></i>";
                    arr.push(partialHtml(mngr.getName(),icon+mngr.getRole(),mngr.getId(),mngr.getEmail(),"Office number: "+mngr.getOfficeNumber()));
                    getPromt();
            })
             
            }
             if(answers.role=="Done"){
                 var holder="";
                 for(var i=0; i<arr.length; i++){
                     holder+=arr[i];
                 }
                html=getHtml(holder);
                fs.writeFile("../output/result.html", html, function(err){
        if(err){
            throw err;
        }
        console.log(chalk.green(`Saved profile html file.`));
     
    })

            }
            
function getHtml(html){
    return  `
    <html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
        .card-header{
            background: #2389da;
            color: white;
        }
        .text_box{
         border:1px solid lightgrey;
         padding:20px;
         width:100%;
         background:white;
         margin-bottom:1px;
        }
        .card-body{
            background: #d3d3d357;
        }
        i{
            color: white;
            margin-right:5px;
        }
        .col-md-4{
            margin-top:30px;
        }
        </style>
        </head>
        <body>
            <div class="container">
            <div class="row">
                ${html}
                </div>
                </div>
            
        
                <script src="https://kit.fontawesome.com/8d8f988f30.js" crossorigin="anonymous"></script>
        </body>
    </html>`;
}

function partialHtml(name,role,id,email,special){
   return `

   <div class="col-md-4">
         <div class="card-header"><h3>${name}<br />${role}</h3>
         </div>
    <div class="card-body">
      <div class="text_box">ID: ${id}</div>
      <div class="text_box">Email: ${email}</div>
       <div class="text_box">${special}</div>
    </div>
    </div>`;
}
})

}