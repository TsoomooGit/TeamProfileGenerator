const Engineer=require("../lib/Engineer");

describe("Engineer",() =>{
    describe("Initialization",()=>{
        it("should create Engineer object if provided valid arguments",()=>{
            const engineer1=new Engineer("Kimmie",1,"Kimmie@yahoo.com","KimmieGit");
            expect(engineer1.getName()).toEqual("Kimmie");
            expect(engineer1.getId()).toEqual(1);
            expect(engineer1.getEmail()).toEqual("Kimmie@yahoo.com");
            expect(engineer1.getGithub()).toEqual("KimmieGit");
        });
    });
});