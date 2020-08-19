/// <reference types="Cypress" />
describe("Tests for Add to bag functionality",()=>{
    beforeEach(()=>{
        cy.visit("https://www.fashiondays.ro/");

    });

    it("Test that the system is able to add one product to the shopping cart.",()=>{
       
        cy.get(
            "#main-menu > div.container.main-menu__container > nav.main-menu__nav-container.main-menu__nav-container--base.clearfix > ul > li:nth-child(2) > div > div.main-menu__overlay-content.main-menu__overlay-content--banner.main-menu__overlay-content--banner--1 > a:nth-child(18) > span"
          ).click({ force: true });
       //navigate to t-shirt category

        cy.get('#prod-2957185 > a > span.campaign-photo > img.lazy.product-over.lazy-not-on-mobile').click({force:true});//selected a t-shirt
       
        // cy.get('#search-result-items > :nth-child(1) > #c99546e72202cc8c23592318ba > .product-tile-name > .name-link').click();
        // // var tshirt = cy.get('.product-col-2 > .product-name').should($temp)=>
        // // {tshirt = $temp.text()};
  
        // console.log("Product name:" + tshirt);
        // cy.get('.selected > .swatchanchor > .swatchanchor-img').click({force:true});//selected the color
        cy.get(':nth-child(1) > .sizeSelector').click({force:true}); //select size
        // cy.get("#Quantity").clear();
        // // cy.get("#Quantity").type("1"); //added quantity
        // cy.get("#Quantity").type("{selectall}{backspace}100");
        // cy.get("#Quantity-error").should("be.visible");
        // cy.get(".add-to-cart-text").click(); //click add to cart 
        // cy.get('.add > .btcy.get('#buy-box > span').click({forece:true});
        // cy.wait(5000);
                // cy.get('#js-minicart-quantity').click();
        cy.get('#buy-box > span').click(); //click add to cart
        cy.get('cart-product-description>a>.brand-name').should("contain","Tricou cu imprimeu cu fructe Miza");



        it("Test that thse systems is able to add one produc to the shopping cart-Quick buy",()=>{// navigate to t-shirt category
         
        });
        it("Test that the system doesn't accept more than 100 of the same product",()=>{
            cy.get('#js-desktop-menu-wrapper > div > ul.menu-main.menu-category.level-1.js-menu-category.js-womens-sub.js-active > li.level-1-item.has-submenu.js-has-submenu.womens-menu.js-prevent-event.womens-tops-menu.js-menu-tab > div > div > div:nth-child(4) > div > ol > li:nth-child(6) > a').click({force:true}); //navigate to t-shirt category
        cy.get('#search-result-items > :nth-child(1) > #c99546e72202cc8c23592318ba > .product-tile-name > .name-link').click({force:true});//selected a t-shirt
        cy.get('.selected > .swatchanchor > .swatchanchor-img').click({force:true});//selected the color
        cy.get(':nth-child(1) > .swatchanchor > .swatchanchor-text').click({force:true}); //select size
        cy.get("#Quantity").type("{selectall}{backspace}100");
        cy.get("#Quantity-error").should("be.visible");
        cy.get(".add-to-cart-text").click(); //click add to cart 
        cy.wait(5000);
                cy.get('#js-minicart-quantity').click();
        cy.get('[data-attribute="color"] > .value').should("contain","pink");
        cy.get('[data-attribute="size"] > .value').should("eq", "10");


    });
   
   
  


    });

});