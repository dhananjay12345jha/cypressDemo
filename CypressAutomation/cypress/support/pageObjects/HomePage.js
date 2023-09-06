class HomePage
{

getSigninLink()
{
    return cy.get('.header-loginStatus-container > .my-account-links > span')
}
getusername()
{
    return cy.get('#ShopLoginForm_Login')
}
getpassword()
{
    return cy.get('#ShopLoginForm_Password')
}
clickonsignon(){
    return  cy.get('.col-sm-offset-3 > .btn-primary')
}

MyaccountButton(){
    return  cy.get('.nav-title')
}
LogoutButtonDisplayed(){
    return  cy.get('.header-loginStatus-container > .my-account-logout > span')
}

SearchForproduct()
{
    return cy.get('#SearchBox_Header')
}
getfirstProduct()
{
  return  cy.get('li:nth-child(1) button:nth-child(1) span:nth-child(1)')
}

clickFirstProduct()

{
    return cy.get(':nth-child(1) > .product-tile > .product-tile-title > .btn')
}
addBasket()
{
    return  cy.contains('Add to Basket')
}


checkoutButtonClick()
{
    return  cy.contains('Go to checkout')
}

cardNumberDetails()
{
    return  cy.get('#braintree-hosted-field-number')
}
expirydate()
{
    return  cy.get('#braintree-hosted-field-expirationDate')
}
cvvdetails()
{
    return  cy.get('#braintree-hosted-field-cvv')
}
acceptTermAndcondition()
{
    return cy.get('.terms-and-conditions > label')
}
placeorderButton()
{
    return cy.get('#submit-button--braintree')
}

}

export default HomePage;
