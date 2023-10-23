import { MainElements } from '../support/page-objects/mainElements.js';

describe('test all redirections to contacts page from dot net page', () => {
    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/hire-dotnet-developers');
        MainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/hire-dotnet-developers');
        MainElements.netBookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free consultation" button redirects "Contacts" page', () => {
        cy.visit('/hire-dotnet-developers');
        MainElements.bookAFreeNetConsultationButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Lets chat" button redirects "Contacts" page', () => {
        cy.visit('/hire-dotnet-developers');
        MainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});