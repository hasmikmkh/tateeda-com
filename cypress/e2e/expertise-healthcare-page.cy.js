import { MainElements } from '../support/page-objects/mainElements.js';

describe('should verify "Lets chat" button redirects "Contacts" page', () => {
    it('should verify "Get a free consultation" button redirects to "Contacts" page', () => {
        cy.visit('/healthcare');
        MainElements.getAFreeConsultationButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
   
    it('should verify "Contact us" button redirects to "Contacts" page', () => {
        cy.visit('/healthcare');
        MainElements.contactUsButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
    
});
