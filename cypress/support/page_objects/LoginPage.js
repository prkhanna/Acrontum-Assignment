export class LoginPage {

    getloginCredentials(name, password) {
        cy.contains('#userForm', 'Login in Book Store').then(Inform => {
            cy.wrap(Inform).find('#userName').type(name)
            cy.wrap(Inform).find('#password').type(password)
            cy.wrap(Inform).find('#login').click()
        })
    }

    getUserName(){
        return cy.get('#userName')

    }
    getPassword(){
        return cy.get('#password')

    }
    getSubmit(){
        return cy.get('#login')

    }

    getErrorMessage(){
        return cy.get('#name')
    }
    
}

export const loginPage = new LoginPage();