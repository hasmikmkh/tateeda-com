import { mainElements } from '../support/page-objects/mainElements.js';
import casual from 'casual-browserify';

describe('test all redirections to contacts page from iot page', () => {

    it('should verify Book a free chat button redirects to contact us page from', () => {
        cy.visit('/telemedicine-software-development-company');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify Book a free chant button redirects to contact us page', () => {
        cy.visit('/telemedicine-software-development-company');
        mainElements.bookAFreeChatArrowButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify Contact us to start form', () => {
        cy.visit('/pharmaceutical-software-development');
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

    it('should verify lets chat button redirects to contact us page', () => {
        cy.visit('/telemedicine-software-development-company');
        mainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
