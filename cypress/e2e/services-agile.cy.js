import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {
    it('should verify "Get A Quote" button redirects to "Contacts" page', () => {
        cy.visit('/agile');
        MainElements.getAQuoteButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Request a quote" button redirects to "Contacts" page', () => {
        cy.visit('/agile');
        MainElements.requestAQuoteButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
