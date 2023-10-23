import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {
    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/web');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/web');
        MainElements.bookFreeChatButtonFromSolutions.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/web');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});