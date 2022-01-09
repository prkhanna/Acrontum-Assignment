
export class BookStorePage {

    //div[class="rt-tr-group"]

    btnAddCollection() {
        return cy.contains('#addNewRecordButton', 'Add To Your Collection').click()

    }

    btnBackToStore() {
        return cy.contains('#addNewRecordButton', 'Back To Book Store').click()

    }

    searchBook(bookName){
        cy.get('#searchBox').type(bookName)
    }

 

    selectBook() {
        cy.get('div[class="rt-tbody"]').find('.rt-tr-group').find('[alt="image"]').then(($e1) => {
          
             cy.wrap( $e1).parent().parent().find('span').then(a=>{
                cy.wrap(a).click()
               
             })
              
        })
    }



}

export const bookStorePage = new BookStorePage();