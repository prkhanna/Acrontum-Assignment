export class NavigationPage {

getNavigationMenu(linkName){
    return   cy.get('.element-list').contains('span', linkName) 
    }
}
    export const navigationPage = new NavigationPage();