import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {
    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/patient-portal-development');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contact" page', () => {
        cy.visit('/patient-portal-development');
        MainElements.bookAFreeChatBtn.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
