export class IotPage {
    static get bookAFreeChatButton() {
        return cy.contains('button', 'Book a free chat');
    }

    static get letsChatButton() {
        //return cy.contains('h3', 'chat');
        return cy.get('.card-text > .btn');
    }

    static get bookAChatWithUsButton() {
       return cy.contains('A Free Chat With Us');
    } 

    static get bookAFreeIoTConsultationButton() {
        return cy.contains('Book A Free IoT Consultation');
    }
}