import { LightningElement, api, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
import searchAcc from '@salesforce/apex/AccountHelper.searchAcc';
export default class LightningDatatableLWCExample extends LightningElement {
    @track columns = [{
        label: 'Account name',
        fieldName: 'Name',
        type: 'text',
        sortable: true
    },
    {
        label: 'Type',
        fieldName: 'Type',
        type: 'text',
        sortable: true
    },
    {
        label: 'Annual Revenue',
        fieldName: 'AnnualRevenue',
        type: 'Currency',
        sortable: true
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone',
        sortable: true
    },
    {
        label: 'Website',
        fieldName: 'Website',
        type: 'url',
        sortable: true
    },
    {
        label: 'Rating',
        fieldName: 'Rating',
        type: 'test',
        sortable: true
    }
    ];

    @track error;
    @track accList;
    @wire(getAccountList)
    wiredAccounts({
        errors,
        data
    }) {
        if (data) {
            this.accList = data;
        } else if (errors) {
            this.error = errors;
        }
    }


    search(event) {
        var key = event.target.value;
        searchAcc({ key }).then(result => {
            this.accList = result;   
        })
            .catch(error => {
                console.log('error ' + error);
            })
    }
}