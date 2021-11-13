import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track displayDiv = false;

    @track cityList = ['Jaipur', 'Bangluru', 'Hyderabad', 'Mumbai'];
    
    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}