import casual from "casual-browserify";
import { TalkToUsModal } from "../support/page-objects/talk-to-us-modal";
import { Header } from "../support/page-objects/header";

describe('Talk to us Form', () => {
  it('should verify Talk to us button opens Schedule appointment modal and sends request', () => {
    Header.portfolioMenuItem.then($link => {
        cy.visit($link.attr('href'));
      });
    TalkToUsModal.talkToUsButton.scrollIntoView();
    TalkToUsModal.talkToUsButton.click();
    TalkToUsModal.nameInput.type(casual.name);
    TalkToUsModal.emailAddressInput.type(casual.email);
    TalkToUsModal.yourPhoneInput.type(casual.phone);
    TalkToUsModal.descriptionInput.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
    TalkToUsModal.sendButton.click();
    TalkToUsModal.successMsg.scrollIntoView();
    TalkToUsModal.successMsg.should('exist');
  });
});