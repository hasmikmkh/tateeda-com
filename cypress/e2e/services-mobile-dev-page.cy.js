import { mainElements } from '../support/page-objects/mainElements.js';

describe('test all redirections to contacts page from iot page', () => {

    it('should verify Book a free chat button redirects to contact us page from HomePage', () => {
        cy.visit('/mobile');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify lets chat button redirects to contact us page from HomePage', () => {
        cy.visit('/mobile');
        mainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
