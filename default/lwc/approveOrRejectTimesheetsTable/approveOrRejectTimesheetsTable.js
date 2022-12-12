import { LightningElement, api } from 'lwc';

export default class ApproveOrRejectTimesheetsTable extends LightningElement {
    @api timesheets;
    @api buttonVariant;
    selectedTimesheets = [];

    get buttonsDisabled() {
        return this.selectedTimesheets.length === 0;
    }

    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Employee', fieldName: 'EmployeeName' },
        { label: 'Status', fieldName: 'Status__c' },
        { label: 'Number of Hours', fieldName: 'Total_Number_of_Hours__c' },
        { label: 'Created Date', fieldName: 'CreatedDate' }

    ];

    getSelectedRows(event) {
        const selectedRows = event.detail.selectedRows;
        this.selectedTimesheets = selectedRows;

        console.log(JSON.parse(JSON.stringify(selectedRows)));
    }

    approveOrReject(event) {
        let operation = event.currentTarget.dataset.operation;
        console.log(event);

        this.dispatchEvent(new CustomEvent('approveorreject', {
            detail: {
                timesheets: this.selectedTimesheets,
                operation: operation
            }
        }));
    }

    toggleModal() {
        this.template.querySelector('c-modal').toggleModal();
    }
}