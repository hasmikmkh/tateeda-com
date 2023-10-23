import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all navigation links to "Contacts" page', () => {
    it('should verify "Book a free chat" button redirects "Contacts" page from', () => {
        cy.visit('/telemedicine-software-development-company');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contact" page', () => {
        cy.visit('/telemedicine-software-development-company');
        MainElements.bookAFreeChatButtonFromWhatWeOfferSection.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects "Contacts" page', () => {
        cy.visit('/telemedicine-software-development-company');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
