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

  it("TM-QA08-290:Search valid data", () => {
    cy.get('.eyXLr').type("alexgirbaci");
    cy.get('.Ap253').click();

  });
  it("TM-QA08-292:Follow", () => {
    cy.get('.eyXLr').type("alexgirbaci");
    cy.get('.Ap253').click();
    cy.get('.vBF20 > ._5f5mN').click({ force: true });
  });
  it("TM-QA08-547:Search min nr of characters", () => {
    cy.get('.eyXLr').type("a");

  });

  it("TM-QA08-293:Like a photo", () => {
    cy.get('.eyXLr').type("alexgirbaci");
    cy.get('.Ap253').click();
    cy.get(':nth-child(1) > :nth-child(1) > a > .eLAPa > ._9AhH0').click();
    cy.get('.fr66n > .wpO6b > .QBdPU > span > ._8-yf5').click();

  });
  it("TM-QA08-294:Comment a photo", () => {
    cy.get('.eyXLr').type("alexgirbaci");
    cy.get('.Ap253').click();
    cy.get(':nth-child(1) > :nth-child(1) > a > .eLAPa > ._9AhH0').click();
    cy.get('.Ypffh').type(":)");
    cy.get('.X7cDz > .sqdOP').click();
  });

  it("TM-QA08-295:Save a post", () => {
    cy.get('.eyXLr').type("alexgirbaci");
    cy.get('.Ap253').click();
    cy.get(':nth-child(1) > :nth-child(1) > a > .eLAPa > ._9AhH0').click();
    cy.get('[aria-disabled="false"] > .wpO6b > .QBdPU > ._8-yf5').click({ force: true });

  });
  it("TM-QA08-296:redirect a post", () => {
    cy.get('.eyXLr').type("alexgirbaci");
    cy.get('.Ap253').click();
    cy.get(':nth-child(1) > :nth-child(1) > a > .eLAPa > ._9AhH0').click();
    cy.get(':nth-child(3) > .QBdPU > ._8-yf5').click({ force: true });
    cy.get('.glyphsSpriteDirect__outline__24__grey_9').click({ force: true });
    cy.get(':nth-child(3) > .XfCBB > .rBNOH > .dCJp8 > .glyphsSpriteCircle__outline__24__grey_2').click({ force: true });
    cy.get('.rIacr').click({ force: true });
  });

  //




  // .click({ force: true });
  // .click({multiple:true});

});


