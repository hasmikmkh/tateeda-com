import { mainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {

    it('should verify "Book a free chat" button redirects to "Contacts" page', () => {
        cy.visit('/mobile');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/mobile');
        mainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
