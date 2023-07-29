import './commands'
import { Header } from '../support/page-objects/header.js';

beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    cy.clearCookies();

    cy.visit('/');

    cy.get('body').trigger('mousedown', 1, 1);
    cy.get('body').trigger('mouseup', 1, 1);

    Header.cookieAccept.click();

    cy.wait(3000);
});
