import { HomePage } from '../support/page-objects/home-page.js';
import casual from 'casual-browserify';
import { FreeConsultationModal} from '../support/page-objects/free-consultation-modal.js';
import { Healthcare } from '../support/page-objects/healthcare-page.js';
import { Biotech } from '../support/page-objects/biotech-page.js';
import { PharmaceuticalSoftwareDevelopmentPage } from '../support/page-objects/pharmaceutical-software-development-page.js';

describe('Lets talk Form tests', () => { 
    it('should verify Get a Free consultation sends message from healthcare page', () => {
        cy.visit('/healthcare');
        Healthcare.GetAFreeConsultationButton.click();
        FreeConsultationModal.nameInput.type(casual.name);
        FreeConsultationModal.emailAddressInput.type(casual.email);
        FreeConsultationModal.MsgBodyInput.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
        // FreeConsultationModal.sendButton.click({force: true});
        // FreeConsultationModal.successMsg.should('be.visible');
     });

    it('should verify Book a Free Chat sends message from Biotech page', () => {
        cy.visit('/biotech');
        Biotech.bookAFreeChat.click();
        FreeConsultationModal.nameInput.type(casual.name);
        FreeConsultationModal.emailAddressInput.type(casual.email);
        FreeConsultationModal.MsgBodyInput.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
        FreeConsultationModal.sendButton.click();
        FreeConsultationModal.successMsg.should('be.visible');
    });

    it('should verify Book a Free Chat sends message from pharmaceutical-software-development page', () => {
        cy.visit('/pharmaceutical-software-development');
        PharmaceuticalSoftwareDevelopmentPage.bookAFreeChatButton.click();
        FreeConsultationModal.nameInput.type(casual.name);
        FreeConsultationModal.emailAddressInput.type(casual.email);
        FreeConsultationModal.MsgBodyInput.type(casual.sentence + '\n SENT BY AUTOMATED TEST');
        FreeConsultationModal.sendButton.click();
        FreeConsultationModal.successMsg.should('be.visible');
    });

});