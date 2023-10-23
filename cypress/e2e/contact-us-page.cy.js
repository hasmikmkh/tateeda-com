import { ContactUs } from '../support/page-objects/conatct-us-page.js';
import casual from 'casual-browserify';

describe('test "Contacts" us form in contacts page', () => {
    it('should verify "Contact us" to start form', () => {
        cy.visit('/contacts');
        ContactUs.fullNameField.type(casual.name);
        ContactUs.iAmInterestedInField.type(casual.text);
        ContactUs.budgetField.type("1000");
        ContactUs.myCompanyField.type(casual.name);
        ContactUs.myBusinessEmailField.type('skip-email@tateeda.com');
        ContactUs.fullNameField.type(casual.name);
        ContactUs.getBackToMebutton.click();
        ContactUs.successMessage.should('be.visible');
    });
});
