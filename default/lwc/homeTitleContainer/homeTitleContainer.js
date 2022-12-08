// imports
import { LightningElement, api } from 'lwc';
import getLatestTitles from '@salesforce/apex/TitleAuraService.getLatestTitles';

// class declaration
export default class HomeTitleContainer extends LightningElement {
    // properties
    @api limit = 5;
    titles;

    // methods/functions
    connectedCallback() {
        getLatestTitles({ limiter: this.limit })
            .then(response => {
                // response is our return value
                this.titles = response;
                console.log(this.titles);
                console.log('when data gets returned');
            })
            .catch(err => {
                console.error(err);
            });

        console.log('when page loads');
    }
}