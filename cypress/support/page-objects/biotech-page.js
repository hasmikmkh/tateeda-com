export class Biotech {
    static get bookAFreeChat() {
        return cy.contains('Book a free chat');
    }

    static get letsChatButton() {
        return cy.get('.card-text > .btn');
    }

    static get successMessage() {
        return cy.contains('Thank you! Our representative will get in touch with you shortly.');
    }
}