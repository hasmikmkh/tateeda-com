import { HomePage } from '../support/page-objects/home-page.js';
import { LetsTalkModal } from '../support/page-objects/let-talk-modal.js';
import casual from 'casual-browserify';
import { IotPage } from '../support/page-objects/iot-page.js';
describe('Book a free chat Form tests', () => {
  it('should verify book a free chat modal called from homePage', () => {
    HomePage.bookAFreeChatButton.click();
    LetsTalkModal.nameInput.type(casual.name);
    LetsTalkModal.emailInput.type(casual.email);
    LetsTalkModal.msgBody.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
    LetsTalkModal.sendButton.click();
    LetsTalkModal.submittedMsg.should('be.visible');
  });

  it('should verify book a free chat modal called from Iot', () => {
    cy.visit('/iot');
    HomePage.bookAFreeChatButton.click();
    LetsTalkModal.nameInput.type(casual.name);
    LetsTalkModal.emailInput.type(casual.email);
    LetsTalkModal.msgBody.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
    LetsTalkModal.sendButton.click();
    LetsTalkModal.submittedMsg.should('be.visible');
  });

  it('should verify book a free chat modal called from Iot', () => {
    cy.visit('/iot');
    HomePage.bookAFreeChatButton.click();
    LetsTalkModal.nameInput.type(casual.name);
    LetsTalkModal.emailInput.type(casual.email);
    LetsTalkModal.msgBody.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
    LetsTalkModal.sendButton.click();
    LetsTalkModal.submittedMsg.should('be.visible');
  });
});
