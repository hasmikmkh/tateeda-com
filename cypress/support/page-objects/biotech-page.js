export class Biotech {
    static get bookAFreeChat() {
        return cy.contains('Book a free chat');
    }

    static get letsChatButton() {
        return cy.get('.card-text > .btn');
    }
}