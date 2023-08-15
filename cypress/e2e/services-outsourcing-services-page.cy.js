import { mainElements } from '../support/page-objects/mainElements.js';

describe('test all redirections to contacts page from  outsourcing services page', () => {

    it('should verify Book a free chat button redirects to contact us page from HomePage', () => {
        cy.visit('/outsourcing-services');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify Book a free chant with us button redirects to contact us page from HomePage', () => {
        cy.visit('/outsourcing-services');
        mainElements.hospitalBookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify lets chat button redirects to contact us page from HomePage', () => {
        cy.visit('/outsourcing-services');
        mainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
