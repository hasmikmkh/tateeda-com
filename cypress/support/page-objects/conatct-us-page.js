export class ContactUs {
    static get fullNameField() {
        return cy.get('.form-side [name="your-name"]');
    }

    static get iAmInterestedInField() {
        return cy.get('.form-side [data-name="your-goal"]');
    }

    static get budgetField() {
        return cy.get('.form-side [data-name="number-cost"]');
    }

    static get myCompanyField() {
        return cy.get('.form-side [data-name="your-company"]');
    }

    static get myBusinessEmailField() {
        return cy.get('.form-side [data-name="your-email"]');
    }

    static get getBackToMebutton() {
        return cy.get('[value="Get Back to Me!"]');
    }

    static get successMessage(){
        return cy.contains('.alert-success','Thank you! Our representative will get in touch with you shortly.');
    }
}