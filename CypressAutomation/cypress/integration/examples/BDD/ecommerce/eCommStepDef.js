/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

//import { data } from 'cypress/types/jquery';
import 'cypress-iframe'
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// npx cypress run --spec cypress/integration/examples/BDD/*.feature --headed --browser chrome --env url="https://google.com"
const homePage=new HomePage()
const productPage=new ProductPage()
let name
Given('I open newlook Page',()=>
{
    cy.visit(Cypress.env('url'))
})

// When I click on Signin link
When('I click on Signin link',function ()
{
    homePage.getSigninLink().click()
   

})

//Then I should be on log in page
Then('I should be on log in page',function ()
{
    cy.title().should('eq','Login To Your Account - Shark UK')
    
    })

// When I fill login details
//Then I click on submit button
When('I fill login details',function ()
{
    homePage.getusername().type(this.data.username)
    homePage.getpassword().type(this.data.password)
   

})
Then('I click on submit button',function ()
{
    homePage.clickonsignon().click()
   

})

//Then I validate i am on Myaccount page
Then('I validate i am on Myaccount page',function ()
{
    homePage.LogoutButtonDisplayed().should('be.visible')
    homePage.MyaccountButton().should('be.visible')

   

})

//When I search for the product
//Then I select the 1st first product from the search result


When('I search for the product',function ()
{
    homePage.SearchForproduct().type(this.data.product)

   

})
Then('I select the 1st first product from the search result',function ()
{
    cy.wait(3000)
    homePage.getfirstProduct().click()
    homePage. clickFirstProduct().click()


   

})
//When I click on Add to basket
//Then product added sucussful in basket
When('I click on Add to basket',function ()
{
    homePage.addBasket().click()
   

})

Then('I click on checkout button',function()
{
    homePage.checkoutButtonClick().click()

})

// Then user pay the amount by pay by card option

Then('user pay the amount by pay by card option',function(){
   
   // cy.frameLoaded('#braintree-hosted-field-number')
    cy.iframe('#braintree-hosted-field-number').find("#credit-card-number").type(this.data.cardnumber)
    cy.iframe('#braintree-hosted-field-expirationDate').find("#expiration").type(this.data.expirydate)
    cy.iframe('#braintree-hosted-field-cvv').find("#cvv").type(this.data.cvv)
    cy.wait(3000)

    cy.get('.terms-and-conditions > label').click({force: true})
    cy.get('#submit-button--braintree').click()
    cy.wait(12000)
    cy.get('h1').then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Order Received")).to.be.true

    })
   

   // cy.get(':nth-child(12) > .loader' , { timeout: 20000 }).should('not.exist');
   
   

    
   
    



    
   
   

  


})



   






