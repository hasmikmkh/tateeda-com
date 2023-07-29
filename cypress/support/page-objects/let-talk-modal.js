export class LetsTalkModal {
    static get nameInput() {
        return cy.get('.modal.show [name="your-name"]');
    }

    static get emailInput() {
        return cy.get('.modal.show [name="email-299"]');
    }

    static get msgBody() {
        return cy.get('.modal.show [name="your-message"]');
    }

    static get sendButton() {
        return cy.get('.modal.show .foot-modal .input-wrapper.btn-arrow .btn-primary');
    }

    static get submittedMsg() {
        return cy.contains('Your submission has been sent.')
    }
}


//name="your-name"