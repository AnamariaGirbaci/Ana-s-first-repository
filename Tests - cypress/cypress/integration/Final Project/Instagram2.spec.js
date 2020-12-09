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
  // it("TM-QA08-275:Login with valid data", () => {
  //   cy.get("#loginForm > div > div:nth-child(1) > div > label > input").type("anamaria.garbaci@gmail.com");
  //   cy.get("#loginForm > div > div:nth-child(2) > div > label > input").type("Anamaria15");
  //   cy.get('.sqdOP > .Igw0E').click();

  // });

  it("TM-QA08-308:Add bio", () => {
    cy.get(':nth-child(5) > ._2dbep > [data-testid=user-avatar]').click({ force: true });
    cy.get('[href="/accounts/edit/"] > .rBNOH > .yC0tu > ._8-yf5').click({ force: true });
    cy.get('#pepBio').type("Hello world!");
    cy.get('.L3NKy').click({ force: true });

  });

 
  it("TM-QA08-608 Unsave a post", () => {
    cy.get(':nth-child(5) > ._2dbep > [data-testid=user-avatar]').click({ force: true });
    cy.get('[href="/anamaria.garbaci/saved/"] > .rBNOH > .yC0tu > ._8-yf5').click({ force: true });
    cy.get(':nth-child(1) > :nth-child(2) > a > .eLAPa > ._9AhH0').click({ force: true });
    cy.get('[aria-disabled="false"] > .wpO6b > .QBdPU > ._8-yf5 > path').click({ force: true });
      });  
    it("TM-QA08-609-Play a video", () => {
      cy.get(':nth-child(5) > ._2dbep > [data-testid=user-avatar]').click({ force: true });
      cy.get('[href="/anamaria.garbaci/"] > .rBNOH > .yC0tu > ._8-yf5').click({ force: true });
      cy.get(':nth-child(1) > a > .eLAPa > ._9AhH0').click({ force: true });

    });
    it("TM-QA08-View instagram story", () => {
      cy.get('.eyXLr').type("alexgirbaci");
      cy.get('.Ap253').click();
      cy.get('[style="transform: translateX(156px);"] > .Igw0E > ._3D7yK > .aoVrC > .tUtVM > .NCYx-').click({ force: true });

    });
     it("TM-QA08-307:Edit privacy", () => {
    cy.get(':nth-child(5) > ._2dbep > [data-testid=user-avatar]').click({ force: true });
    cy.get('[href="/accounts/edit/"] > .rBNOH > .yC0tu > ._8-yf5').click({ force: true });
    cy.get(':nth-child(7) > .h-aRd').click();
    cy.get('#accountPrivacy > .U17kh > .mwD2G').click({ force: true });
    
  });

  }); 
 