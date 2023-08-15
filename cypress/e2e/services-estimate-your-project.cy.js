import { mainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {

    it('should verify "Schedule meeting" button redirects to "Contacts" page', () => {
        cy.visit('/estimate');
        mainElements.ScheduleMeetingButton.invoke('show');
        mainElements.getAQuoteButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});