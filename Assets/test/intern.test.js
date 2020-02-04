const Intern=require("../lib/Intern");

describe("Intern",() =>{
    describe("Initialization",()=>{
        it("should create Intern object if provided valid arguments",()=>{
            const intern1=new Intern("Kimmie",1,"Kimmie@yahoo.com","GW");
            expect(intern1.getName()).toEqual("Kimmie");
            expect(intern1.getId()).toEqual("1");
            expect(intern1.getEmail()).toEqual("Kimmie@yahoo.com");
            expect(intern1.getSchool()).toEqual("GW");
        });

    });
    });