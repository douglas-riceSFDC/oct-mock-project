import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import TITLE_SELECTED_MC from '@salesforce/messageChannel/Title_Selected__c';
import getAllChildStock from '@salesforce/apex/StockAuraService.getAllChildStock';

export default class RelatedStockContainer extends LightningElement {
    @wire(MessageContext) messageContext;
    subscription;
    stock;
    selectedStockId;

    connectedCallback() {
        this.subscribeToTitleSelected();
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
    }

    subscribeToTitleSelected() {
        this.subscription = subscribe(this.messageContext, TITLE_SELECTED_MC, (message) => {
            // message is the payload from the fired event
            this.handleTitleSelected(message);
        });
    }

    handleTitleSelected(message) {
        console.log('Handling event: ', message.title.Name);

        getAllChildStock({ titleId: message.title.Id })
            .then(response => {
                console.log(response);
                this.stock = response;
            })
            .catch(err => {
                console.error(err);
            });
    }

    handleStockClicked(event) {
        console.log('Event Caught: ', event.detail);
        this.selectedStockId = event.detail;
    }

}