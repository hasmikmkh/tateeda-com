import casual from 'casual-browserify';
import { mainElements } from '../support/page-objects/mainElements.js';

describe('test all redirections to contacts page from iot page', () => {

    it('should verify Book a free chat button redirects to contact us page', () => {
        cy.visit('/patient-portal-development');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify Book a free chant button redirects to contact us page', () => {
        cy.visit('/patient-portal-development');
        mainElements.bookAFreeChatBtn.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
    
    it('should verify Contact us to start form', () => {
        cy.visit('/patient-portal-development');
        mainElements.fullNameInput.type(casual.name);
        mainElements.iAmInterestedInInput.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
        mainElements.myPrelimBudgetInput.type('222222');
        mainElements.myCompanyNameInput.type(casual.name);
        mainElements.myIdealStartDayIsDropDown.select('Immediately');
        mainElements.myBusinessEmailInput.type(casual.email);
        mainElements.phoneNumberInput.type(casual.phone);
        cy.pause(3000);
        //mainElements.getBackToMebutton.click();
        // FreeConsultationModal.successMsg.should('be.visible');
    });
});
