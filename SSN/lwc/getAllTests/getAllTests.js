import { LightningElement, wire } from 'lwc';
import getTests from '@salesforce/apex/TestService.getTests';

export default class GetAllTests extends LightningElement {
    @wire(getTests) records;
}