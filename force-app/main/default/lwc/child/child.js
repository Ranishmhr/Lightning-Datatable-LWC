import { api, LightningElement, track } from 'lwc';

export default class Child extends LightningElement {

    search(event) {

        const searchEvent = new CustomEvent('searchaccount', {
            detail: event.target.value
        });
        this.dispatchEvent(searchEvent);

    }
}