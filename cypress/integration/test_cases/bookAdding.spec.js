/// <reference types="cypress" />
import { profilePage } from '../../support/page_objects/ProfilePage'
import { loginPage } from '../../support/page_objects/LoginPage'
import { bookStorePage } from '../../support/page_objects/BookStorePage'
import { navigationPage } from '../../support/page_objects/NavigationPage'
describe("Book adding test suite", ()=>{

    beforeEach('Open Application', function() {
       
        cy.openLoginPage()
        cy.fixture('testdata').then(testdata => {
            this.testdata = testdata
        })

    })

    it("Adding of Book to a user", function(){
        loginPage.getloginCredentials(this.testdata.username, this.testdata.password)
        cy.url().should('include', 'profile')
        profilePage.btnDeletAllBooks().click()
        profilePage.getDeletConfirmation()

       profilePage.btnGoToBookStore().click()
       bookStorePage.searchBook(this.testdata.bookName)
    
        bookStorePage.selectBook()
        bookStorePage.btnAddCollection()
    
        navigationPage.getNavigationMenu('Profile').click()
        profilePage.getBookName(this.testdata.bookName)

    })

   
})