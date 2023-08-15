import { mainElements } from '../support/page-objects/mainElements.js';
import casual from 'casual-browserify';

describe('test all redirections to contacts page from iot page', () => {
    it('should verify Book a free chat button redirects to contact us page', () => {
        cy.visit('/health-insurance-software-development');
        mainElements.bookAFreeChatBtn.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify book A free chat button redirects to contact us page', () => {
        cy.visit('/health-insurance-software-development');
        mainElements.medBookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify Contact us to start form', () => {
        cy.visit('/health-insurance-software-development');
        mainElements.fullNameInput.type(casual.name);
        mainElements.iAmInterestedInInput.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
        mainElements.myPrelimBudgetInput.type('222222');
        mainElements.myCompanyNameInput.type(casual.name);
        mainElements.myIdealStartDayIsDropDown.select('Immediately');
        mainElements.myBusinessEmailInput.type(casual.email);
        mainElements.phoneNumberInput.type(casual.phone);
        //mainElements.getBackToMebutton.click();
        // FreeConsultationModal.successMsg.should('be.visible');
    });
    it('should verify lets chat button redirects to contact us page from HomePage', () => {
        cy.visit('/health-insurance-software-development');
        mainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});