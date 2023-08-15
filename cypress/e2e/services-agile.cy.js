import { mainElements } from '../support/page-objects/mainElements.js';

describe('test all redirections to contacts page from agile page', () => {

    it('should verify Get A QUOTE button redirects to contact us page', () => {
        cy.visit('/agile');
        mainElements.getAQuoteButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify REQUEST A QUOTE button redirects to contact us page', () => {
        cy.visit('/agile');
        mainElements.requestAQuoteButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
