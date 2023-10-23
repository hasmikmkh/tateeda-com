import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation buttons to "Contacts" page', () => {

    it('should verify "Book a free chat" button redirects to contact us page from', () => {
        cy.visit('/ehr-and-emr-software-development-company');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button from "Solutions" section redirects to "Contacts" page', () => {
        cy.visit('/ehr-and-emr-software-development-company');
        MainElements.bookFreeChatButtonFromSolutions.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button from "Solutions" section redirects to "Contacts" page', () => {
        cy.visit('/ehr-and-emr-software-development-company');
        MainElements.bookAFreeChatButtonFromClients.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/ehr-and-emr-software-development-company');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
