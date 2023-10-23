import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all redirections to contacts page from devOps page', () => {
    it('should verify "Book a free chat" button redirects to "Contacts" page', () => {
        cy.visit('/devops-consulting-services');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contacts" page from HomePage', () => {
        cy.visit('/devops-consulting-services');
        MainElements.bookAFreeChatButtonFromClients.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/devops-consulting-services');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
