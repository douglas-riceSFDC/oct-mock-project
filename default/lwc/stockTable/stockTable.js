import { LightningElement, api } from 'lwc';

export default class StockTable extends LightningElement {
    @api stock;

    selectStock(event) {
        let selectedStock = this.stock.find(stock => {
            return stock.Name === event.currentTarget.text;
        });

        console.log('Event Fired - ', selectedStock);

        const stockClickedEvent = new CustomEvent('stockclicked', {
            detail: selectedStock.Id
        });

        this.dispatchEvent(stockClickedEvent);
    }
}