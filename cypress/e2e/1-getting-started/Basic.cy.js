///<reference types="cypress"/>

describe('Adactin Hotel & Sauce Demo',()=>{
  Cypress.on('uncaught:exception', (err, runnable) => { 
    return false 
    })
    before(()=>{
      cy.viewport(1200,700)
    })
    
  // beforeEach(()=>{
  //   cy.visit('https://adactinhotelapp.com/');
  // })
  it('Valid User',()=>{

    cy.visit('https://adactinhotelapp.com/');
    cy.wait(2000).then(() => {
    cy.get('#username').type('Tauseef12345');
    cy.get('#password').type('xyz123')
    cy.get('#login').click();
  });
    cy.get('#location').select('Sydney')
    cy.get('#Submit').click();
    cy.get('#radiobutton_1').click();
    cy.get('#continue').click();
    cy.get('#first_name').type('Ghani');
    cy.get('#last_name').type('bhai');
    cy.get('#address').type('gulshan');
    cy.get('#cc_num').type('1234567891234567');
    cy.get('#cc_type').select('American Express');
    cy.get('#cc_exp_month').select('May');
    cy.get('#cc_exp_year').select('2025');
    cy.get('#cc_cvv').type('123');
    cy.get('#book_now').click();
    cy.wait(5000);
    cy.get('#logout').click();
     
  });
  // //   beforeEach(()=>{
// //     cy.visit('https://www.saucedemo.com/v1/');
// // // FOR SAUCE DEMO
// //   });
 
  it.only('Sauce valid credential',()=>{
    cy.visit('https://www.saucedemo.com/v1/');
    cy.wait(1000).then(() => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  })
    cy.wait(1000);
    cy.get('.product_label').should('have.text',"Products");
    cy.get('.product_sort_container').select('Price (high to low)')
    cy.wait(5000);
    cy.get('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
    cy.wait(1000);
    cy.get('.fa-layers-counter').click();
    cy.get('.btn_action').click();
    cy.get('[data-test="firstName"]').type('abddddddc');
    cy.get('[data-test="lastName"]').type('xyzdddddddd');
    cy.get('[data-test="postalCode"]').type('74000');
    cy.get('.btn_primary').click();
    cy.get('.btn_action').click();

  })
});
