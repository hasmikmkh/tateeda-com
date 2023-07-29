export class Healthcare {
    static get GetAFreeConsultationButton() {
        return cy.get('button[data-target="#getContactUsModal"]');
    }
}