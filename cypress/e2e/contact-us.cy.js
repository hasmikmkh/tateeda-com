import { Header } from '../support/page-objects/header.js';

describe('Contact us button tests', () => {
  it('should verify lets chat button redirects to contact us page', () => {
    // Header.contactUsButton.click();
    // Not working because of site scripts
    // Directly navigation to the corresponding url as a temporary solution
    Header.contactUsButton.then($link => {
      cy.visit($link.attr('href'));
    });
    cy.url().should('be.equal', 'https://tateeda.com/contacts');
  });
});
