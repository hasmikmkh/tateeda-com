import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {
    it('should verify "Book a free chat" button redirects to "Contacts" page', () => {
        cy.visit('/software-testing-services');
        MainElements.bookAFreeCallButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contacts" page from HomePage', () => {
        cy.visit('/software-testing-services');
        MainElements.bookAFreeChatBtn.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contacts" page from HomePage', () => {
        cy.visit('/software-testing-services');
        MainElements.bookAFreeChatButtonFromOurServicesSection.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/software-testing-services');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
