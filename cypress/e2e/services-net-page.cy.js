import { mainElements } from '../support/page-objects/mainElements.js';
import casual from 'casual-browserify';

describe('test all redirections to contacts page from dot net page', () => {

    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/hire-dotnet-developers');
        mainElements.bookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free chat" button redirects "Contacts" page', () => {
        cy.visit('/hire-dotnet-developers');
        mainElements.netBookAFreeChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Book a free consultation" button redirects "Contacts" page', () => {
        cy.visit('/hire-dotnet-developers');
        mainElements.bookAFreeNetConsultationButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });

    it('should verify "Contact us to start" form', () => {
        cy.visit('/hire-dotnet-developers');
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

    it('should verify "Lets chat" button redirects "Contacts" page', () => {
        cy.visit('/hire-dotnet-developers');
        mainElements.letsChatButton.click();
        cy.url().should('be.equal', 'https://tateeda.com/contacts');
    });
});