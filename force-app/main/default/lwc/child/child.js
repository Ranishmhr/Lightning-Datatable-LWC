import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    @api SKey;
    search(event) {
        this.Skey = event.target.value;
        const searchEvent = new CustomEvent('searchaccount', {
            detail: this.Skey
        });
        this.dispatchEvent(searchEvent);

    }
}