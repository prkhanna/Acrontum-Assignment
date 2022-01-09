/// <reference types="cypress" />

import { loginPage } from '../../support/page_objects/LoginPage'
describe("Login test suite",()=> {


    beforeEach('Open Application', function() {
       
        cy.openLoginPage()
        cy.fixture('testdata').then(testdata => {
            this.testdata = testdata
        })

    })

    it('Verify the valid login credentials', function () {
        loginPage.getloginCredentials(this.testdata.username, this.testdata.password)
        cy.url().should('include', 'profile');
    })

     it('Verify the Invalid login credentials thorws Error Message', function () {
        loginPage.getloginCredentials(this.testdata.invaliduser, this.testdata.invalidpassword)
        loginPage.getErrorMessage().then(function (text){
           let message =  text.text()
         expect(message).to.equals('Invalid username or password!')
      
        })

     })

     it('Verify the Highlighted Fields when credentials not entered',  ()=>{
       loginPage.getSubmit().click()
       loginPage.getUserName().should('have.css', 'border-color', 'rgb(220, 53, 69)')
       loginPage.getPassword().should('have.css', 'border-color', 'rgb(220, 53, 69)')
     })

})