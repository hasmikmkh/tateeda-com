import { MainElements } from '../support/page-objects/mainElements.js';;

describe('test all navigation links to "Contacts" page', () => {
    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/pharmaceutical-software-development');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contacts" page', () => {
        cy.visit('/pharmaceutical-software-development');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
