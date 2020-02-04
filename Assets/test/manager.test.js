const Manager=require("../lib/Manager");

describe("Manager",() =>{
    describe("Initialization",()=>{
        it("should create Manager object if provided valid arguments",()=>{
            const manager1=new Manager("Kimmie",1,"Kimmie@yahoo.com",123);
            expect(manager1.getName()).toEqual("Kimmie");
            expect(manager1.getId()).toEqual(1);
            expect(manager1.getEmail()).toEqual("Kimmie@yahoo.com");
            expect(manager1.getOfficeNumber()).toEqual(123);
        });

    });
    });