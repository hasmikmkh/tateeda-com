import { mainElements } from '../support/page-objects/mainElements.js';

describe('test all redirections to contacts page from  outsourcing services page', () => {

    it('should verify "Book a free chat" button redirects to "Contacts" page', () => {
        cy.visit('/outsourcing-services');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contacts" page from HomePage', () => {
        cy.visit('/outsourcing-services');
        mainElements.bookAFreeChatButtonFromFunctionSection.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/outsourcing-services');
        mainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
