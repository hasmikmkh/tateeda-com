export class MainElements {
    static get contactUsHeaderButton() {
        return cy.get('li.menu-item-object-page > a.nav-link').eq(0);
    }
    static get contactUsButton() {
        return cy.get('div.btn-group > a[href="/contacts"]').eq(1);
    }

    static get bookAFreeChatButton() {
        return cy.contains('a', 'Book a free chat');
    }

    static get bookAFreeChatButtonFromWhatWeOfferSection() {
        return cy.get('.what-we-offer-section a');
    }

    static get bookFreeChatButtonFromSolutions() {
        return cy.get('.technologies-section a');
    }

    static get bookAFreeChatButtonFromClients() {
        return cy.get('.clients-slider .button-wrapper a');
    }

    static get bookAFreeChatButtonFromFunctionSection() {
        return cy.contains('.button-wrapper', 'a', 'Book a free chat');
    }

    static get bookAFreeChatButtonFromServicesSection() {
        return cy.get('.what-we-offer-section a');
    }

    static get netBookAFreeChatButton() {
        return cy.get('.hero-services a');
    }
    
    static get bookAFreeChatButtonFromOurServicesSection() {
        return cy.get('.content-testing-left-side a');
    }
    static get letsChatButton() {
        return cy.get('.card-text > .btn');
    }

    static get talkToUsButton() {
        return cy.contains('a', 'talk to us');
    }

    static get getAFreeConsultationButton() {
        return cy.contains('span', 'Get a Free Consultation');
    }

    static get bookAFreeChatWithUsButton() {
        return cy.contains('a', 'Book A Free Chat With Us');
    }

    static get bookAFreeIoTConsultation() {
        return cy.contains('a', 'Book A Free IoT Consultation');
    }

    static get bookAFreeChatBtn() {
        return cy.contains('a', 'Book a Free Chat');
    }

    static get bookAFreeNetConsultationButton() {
        return cy.contains('a', 'Book a free .NET consultation');
    }

    static get bookAFreeCallNowButton() {
        return cy.contains('a', 'Book a free call now');
    }

    static get bookAFreeCallButton() {
        return cy.contains('a', 'Book a Free Call');
    }    

    static get getAQuoteButton() {
        return cy.get('#callout-quote a');
    }

    static get requestAQuoteButton() {
        return cy.get('.why-us-action a');
    }

    static get ScheduleMeetingButton() {
        return cy.contains('button', 'Schedule meeting');
    }

    static get fullNameInput() {
        return cy.get('.healthcare-send-form input[name="your-name"]');
    }

    static get iAmInterestedInInput() {
        return cy.get('.healthcare-send-form input[name="your-goal"]');
    }

    static get myPrelimBudgetInput() {
        return cy.get('.healthcare-send-form input[name="number-cost"]')
    }

    static get myCompanyNameInput() {
        return cy.get('.healthcare-send-form input[name="your-company"]')
    }

    static get myIdealStartDayIsDropDown() {
        return cy.get('[name="date-project"]');
    }

    static get myBusinessEmailInput() {
        return cy.get('.healthcare-send-form input[name="your-email"]');
    }

    static get phoneNumberInput() {
        return cy.get('.healthcare-send-form input[name="your-contact"]');
    }

    static get getBackToMeButton() {
        return cy.get('.healthcare-send-form input[value="Get Back to Me!"]');
    }

    static get bookAFreeChatLink() {
        cy.get('div[role="group"] > a.btn-arrow > span')
    }

    static get successMessage(){
        return cy.contains('.alert-success','Thank you! Our representative will get in touch with you shortly.');
    }
}