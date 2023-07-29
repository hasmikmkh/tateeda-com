export class FreeConsultationModal {
    static get nameInput() {
        return cy.get('.modal.show [name="your-name"]');
    }

    static get emailAddressInput() {
        return cy.get('[data-name="email-299"]');
    }

    static get MsgBodyInput() {
        return cy.get('.modal.show [name="your-message"]');
    }

    static get sendButton() {
        return cy.get('input[value="Send"][type="Submit"]').eq(5);
    }

    static get successMsg() {
        return cy.contains('Your submission has been sent.');
    }

    static get readyForCallButton() {
        //return cy.get('[data-target="#calendarModal"]').eq(0);
        return cy.get('.d-flex > :nth-child(1) > .d-block');
    }

    static get calendarModal() {
        return cy.get('#calendarModalBody');
    }

    static get calendarDateSelection() {
        return cy.get('[data-selenium-test-disabled="false"]').eq(0);
    }

    static get timeSelection() {
        return cy.get('.private-selectable-box__inner').eq(0);
    }

    static get firstNameInputCaptcha() {
        return cy.get('[name="firstName"]');
    }

    static get lastNameInputCaptcha() {
        return cy.get('[name="firstName"]');
    }

    static get emailAddressCaptcha() {
        return cy.get('[name="email"]');
    }

    static get backButton() {
        return cy.get('[data-selenium-test="back-button"]');
    }
}