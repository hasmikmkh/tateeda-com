export class TalkToUsModal {
    static get talkToUsButton() {
        //return cy.contains('TALK TO US');
        return cy.get('.card > .btn');
    }

    static get nameInput() {
        return cy.get('.modal.show [name="your-name"]');
    }

    static get emailAddressInput() {
        return cy.get('.modal.show [name="your-email"]');
    }

    static get yourPhoneInput() {
        return cy.get('.modal.show [name="your-phone"]');
    }

    static get descriptionInput() {
        return cy.get('.modal.show [name="your-message"]');
    }

    static get sendButton() {
        return cy.get('input[type="submit"]').eq(0);
    }

    static get successMsg() {
        return cy.contains('Thank you for your message. It has been sent.');
    }
}