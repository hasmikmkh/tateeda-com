import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation buttons to "Contacts" page', () => {

    it('should verify "Book a free chat" button redirects to contact us page', () => {
        cy.visit('/biotech');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "lets chat" button redirects to contact us page', () => {
        cy.visit('/biotech');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
