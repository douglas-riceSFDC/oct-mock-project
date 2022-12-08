import { LightningElement, api, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import TITLE_SELECTED_MC from '@salesforce/messageChannel/Title_Selected__c';

export default class TitleCard extends LightningElement {
    @api title;

    @wire(MessageContext) messageContext;

    connectedCallback() {
        // this gets executed for each instance
        console.log('connectd callback in titleCard');
    }

    selectTitle() {
        const payload = {
            title: this.title
        };

        publish(this.messageContext, TITLE_SELECTED_MC, payload);

        console.log('Firing event:', this.title.Name);
        // console.log('Firing event:', JSON.parse(JSON.stringify(this.title)));
    }
}