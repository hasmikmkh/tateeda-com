import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {
    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/iot');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contacts" page', () => {
        cy.visit('/iot');
        MainElements.bookAFreeChatWithUsButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book A Free IoT Consultation" button redirects to "Contacts" page', () => {
        cy.visit('/iot');
        MainElements.bookAFreeIoTConsultation.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/iot');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
