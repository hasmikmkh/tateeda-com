import { Biotech } from '../support/page-objects/biotech-page.js';
import { HomePage } from '../support/page-objects/home-page.js';
import { IotPage } from '../support/page-objects/iot-page.js';
import { PharmaceuticalSoftwareDevelopmentPage } from '../support/page-objects/pharmaceutical-software-development-page.js';


describe('Book a free chat Form', () => {
  it('should verify lets chat button redirects to contact us page from HomePage', () => {
    HomePage.letsChatButton.click();
    cy.url().should('be.equal', 'https://tateeda.com/contacts');
  });

  it('should verify lets chat button redirects to contact us page from Iot', () => {
    cy.visit('/iot');
    IotPage.letsChatButton.click();
    cy.url().should('be.equal', 'https://tateeda.com/contacts');
  });

  it('should verify Book A Free Chat With Us redirects to contact us page from Iot', () => {
    cy.visit('/iot');
    IotPage.bookAChatWithUsButton.click();
    cy.url().should('be.equal', 'https://tateeda.com/contacts');
  });

  it('should verify Book A Free IoT Consultation button redirects to contact us page from Iot', () => {
    cy.visit('/iot');
    IotPage.bookAFreeIoTConsultationButton.click();
    cy.url().should('be.equal', 'https://tateeda.com/contacts');
  });

  it('should verify Lets chat button redirects to contact us page from Iot', () => {
    cy.visit('/biotech');
    Biotech.letsChatButton.click();
    cy.url().should('be.equal', 'https://tateeda.com/contacts');
  });

  it('should verify Book a free chant redirects to contact us page from pharmaceutical-software-development page', () => {
    cy.visit('/pharmaceutical-software-development');
    PharmaceuticalSoftwareDevelopmentPage.bookAFreeChatButtonTwo.click();
    cy.url().should('be.equal', 'https://tateeda.com/contacts');
  });

});
