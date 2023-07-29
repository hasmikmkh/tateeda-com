export class Header {
    static get cookieAccept() {
        return cy.get('#cookie_action_close_header');
    }

    static get contactUsButton() {
        return cy.contains('.nav-link', 'Contact us' );
        //return cy.get('.btn > .nav-link');
    }

    static get portfolioMenuItem() {
        return cy.contains('.nav-link', 'Portfolio' );
    }
}
