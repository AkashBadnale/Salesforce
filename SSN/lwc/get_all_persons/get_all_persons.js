import { LightningElement, wire } from 'lwc';
import getPersons from '@salesforce/apex/PersonController.getPersons';


export default class Get_all_persons extends LightningElement {
    @wire(getPersons) wiredPersons;
}