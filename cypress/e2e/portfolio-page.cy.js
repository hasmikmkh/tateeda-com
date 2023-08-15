import { mainElements } from '../support/page-objects/mainElements.js';
import { LetsTalkModal } from '../support/page-objects/let-talk-modal.js';
import casual from 'casual-browserify';
import { PortfolioPage } from '../support/page-objects/portfolio-page.js';

describe('test all navigation links to "Contacts" page', () => {
    
    it('should verify TALK TO US button redirects to Contacts page from PortfolioPage', () => {
        cy.visit('/project');
        PortfolioPage.talkToUsButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

});
