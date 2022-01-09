export class ProfilePage {

    btnGoToBookStore(){
        return cy.get('#gotoStore')

    }
    
    btnDeletAllBooks(){
        return cy.get('.text-right').contains('#submit','Delete All Books')

    }


   getDeletConfirmation() {
    cy.get('.modal-content').then(delPopup => {
        cy.wrap(delPopup).find('.modal-header').then(errorMsg =>{
          var msg=   errorMsg.text()
          cy.wrap(errorMsg).should('contain',"Delete All Books")
        })
        cy.wrap(delPopup).find('.modal-footer').find('#closeSmallModal-ok').click()

       
    })
}

  
getBookName(name) {
    cy.get('div[class="rt-tbody"]').find('.rt-tr-group').find('[alt="image"]').then(($e1) => {
      
         cy.wrap( $e1).parent().parent().find('span').then(a=>{
            var bookName= a.text();
            expect(bookName).to.contain(name)
         })
          
    })
}
 
}

export const profilePage = new ProfilePage();