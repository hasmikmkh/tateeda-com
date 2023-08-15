import { mainElements } from '../support/page-objects/mainElements.js';

describe('should verify "Lets chat" button redirects "Contacts" page', () => {
    it('should verify "Get a free consultation" button redirects to "Contacts" page', () => {
        cy.visit('/healthcare');
        mainElements.getAFreeConsultationButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
   
    it('should verify "Contact us" button redirects to "Contacts" page', () => {
        cy.visit('/healthcare');
        mainElements.contactUsButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
    
});
