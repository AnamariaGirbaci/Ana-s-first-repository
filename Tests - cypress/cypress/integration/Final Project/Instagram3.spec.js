/// <reference types="Cypress" />
describe("Final Project-Instagram", () => {
    beforeEach(() => {
      cy.visit("http://www.instagram.com");
  
      Cypress.on("uncaught:exception", (err, runnable) => {
        //  returning false here prevents Cypress from failing the test
        return false;
  
  
      });
      Cypress.Cookies.defaults({
        //saves cookies until browser is closed
        whitelist: (cookie) => {
          return true;
        },
      })
    });
    it.only("TM-QA08-275:Login with valid data", () => {
      cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci@gmail.com");
      cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria15");
      cy.get('.sqdOP > .Igw0E').click();
     
    });
    it.only("TM-QA08-276:Login with invalid username", () => {
        cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci01@gmail.com");
        cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria15");
        cy.get('.sqdOP > .Igw0E').click();
      
      });
    
    it.only("TM-QA08-283:Login with invalid data", () => {
            cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci15@gmail.com");
            cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria1567");
            cy.get('.sqdOP > .Igw0E').click();
        
          });

          it.only("TM-QA08-281:login with invalid password", () => {
            cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci@gmail.com");
            cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria1567");
            cy.get('.sqdOP > .Igw0E').click();
          
          });
          
});