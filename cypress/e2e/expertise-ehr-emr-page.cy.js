import { mainElements } from '../support/page-objects/mainElements.js';
import casual from 'casual-browserify';

describe('test all navigation buttons to "Contacts" page', () => {

    it('should verify "Book a free chat" button redirects to contact us page from', () => {
        cy.visit('/ehr-and-emr-software-development-company');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button from "Solutions" section redirects to "Contacts" page', () => {
        cy.visit('/ehr-and-emr-software-development-company');
        mainElements.bookFreeChatButtonFromSolutions.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button from "Solutions" section redirects to "Contacts" page', () => {
        cy.visit('/ehr-and-emr-software-development-company');
        mainElements.bookAFreeChatButtonFromClients.click();
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

    it('should verify "Lets chat" button redirects to "Contacts" page', () => {
        cy.visit('/ehr-and-emr-software-development-company');
        mainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});
