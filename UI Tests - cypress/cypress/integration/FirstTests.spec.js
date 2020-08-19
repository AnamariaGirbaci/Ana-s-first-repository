/// <reference types="Cypress" />

const { should } = require("chai");

context("First automated tests", () => {
  
    it("Visit wiki en", () => {  
     cy.visit("https://www.wikipedia.org/");
     cy.get('#js-link-box-en > strong').click(); //clicks on the given element
     cy.get('#mp-welcome').should("be.visible"); //the element with id #mp-welcome should be visible
     cy.get('#mp-welcome').should("contain","Welcome");
    });

    it("Test Wiki login",() => { //ONLY DEBUG
      cy.visit("https://www.wikipedia.org/");
      cy.get('#js-link-box-en > strong').click();
      cy.get('#pt-login > a').click();
      cy.get('#wpName1').type("anamaria.garbaci");
      cy.get('#wpPassword1').type("Anamaria15");
      cy.get('#wpLoginAttempt').click();
      cy.get('#mw-head').should("contain","Anamaria.garbaci");
    });
    it("Test Wiki login",() => { //ONLY DEBUG
      cy.visit("https://www.wikipedia.org/");
      cy.get('#js-link-box-en > strong').click();
      cy.get('#n-contents > a').click();
      cy.get('#firstHeading').should("contain","Wikipedia:Contents");
    });
}); 