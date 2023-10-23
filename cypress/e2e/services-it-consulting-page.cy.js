import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all redirections to contacts page from it consulting page', () => {
    it('should verify "Book a free chat" button redirects to "Contacts" page', () => {
        cy.visit('/healthcare-it-consulting-services');
        MainElements.bookAFreeChatBtn.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free call now" button redirects to "Contacts" page from HomePage', () => {
        cy.visit('/healthcare-it-consulting-services');
        MainElements.bookAFreeCallNowButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/healthcare-it-consulting-services');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
