/// <reference types="Cypress" />
describe("Test instagram",()=>{
   
    it("Visit instagram", () => {  
        cy.visit("https://www.instagram.com/");
        //Test the log in function with valid data......................
        cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci@gmail.com");
        cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria15");
        cy.get('.sqdOP > .Igw0E').click();
        cy.get('.cmbtv > .sqdOP').click();
        cy.get('.bIiDR').click();

        //Login with invalid usernam and valid password................................

        // cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci15@gmail.com");
        // cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria15");
        // cy.get('.sqdOP > .Igw0E').click();


    //  Login with valid username and invalid password.............................................
    //cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci@gmail.com");
    //cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria1567");
    //cy.get('.sqdOP > .Igw0E').click();
       
       //Login with invalid data, both username and password........................
    //    cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci15@gmail.com");
    // cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria1567");
    // cy.get('.sqdOP > .Igw0E').click();
    

       
      
       
        
    });
});