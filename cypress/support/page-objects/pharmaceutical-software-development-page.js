export class PharmaceuticalSoftwareDevelopmentPage {
    static get bookAFreeChatButton() {
        return cy.get('button').contains('Book a free chat');
    }

    static get bookAFreeChatButtonTwo() {
        return cy.get('a').contains('Book a free chat');
    }
}