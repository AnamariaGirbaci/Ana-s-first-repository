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
    it("TM-QA08-613:E2E", () => {
      cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci@gmail.com");
      cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria15");
      cy.get('.sqdOP > .Igw0E').click();
      cy.get('.eyXLr').type("alexgirbaci");
      cy.get('.Ap253').click({force:true});
    cy.get(':nth-child(1) > :nth-child(1) > a > .eLAPa > ._9AhH0').click();
    cy.get('.fr66n > .wpO6b > .QBdPU > span > ._8-yf5').click();
    cy.get('.BI4qX > .wpO6b > .QBdPU > ._8-yf5 > path').click();
    cy.get(':nth-child(5) > ._2dbep > [data-testid=user-avatar]').click({force:true});
    cy.get(':nth-child(6) > .rBNOH').click({force:true});
    });





     
    });