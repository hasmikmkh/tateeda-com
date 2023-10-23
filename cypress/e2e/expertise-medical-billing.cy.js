import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {
    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/medical-billing-software-development');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/medical-billing-software-development');
        MainElements.bookAFreeChatBtn.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
