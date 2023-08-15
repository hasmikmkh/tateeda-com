import { mainElements } from '../support/page-objects/mainElements.js';
import casual from 'casual-browserify';

describe('test all navigation links to "Contacts" page', () => {

    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/pharmaceutical-software-development');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects to "Contacts" page', () => {
        cy.visit('/pharmaceutical-software-development');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Contact us to start" form', () => {
        cy.visit('/pharmaceutical-software-development');
        mainElements.fullNameInput.type(casual.name);
        mainElements.iAmInterestedInInput.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
        mainElements.myPrelimBudgetInput.type('222222');
        mainElements.myCompanyNameInput.type(casual.name);
        mainElements.myIdealStartDayIsDropDown.select('Immediately');
        mainElements.myBusinessEmailInput.type(casual.email);
        mainElements.phoneNumberInput.type(casual.phone);
        mainElements.getBackToMeButton.click();
        FreeConsultationModal.successMsg.should('be.visible');
    });

});
