export class HomePage {
    static get bookAFreeChatButton() {
        return cy.contains('button', 'Book a free chat');
    }

    static get letsChatButton() {
        //return cy.contains('h3', 'chat');
        return cy.get('.card-text > .btn');
    }
}