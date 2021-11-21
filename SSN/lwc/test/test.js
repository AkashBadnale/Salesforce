import { LightningElement } from 'lwc';
import addTest from '@salesforce/apex/TestService.addTest';

export default class Test extends LightningElement {
    name;
    surname;
    
    nameChange(event){
        this.name = event.target.value;
    }
    surnameChange(event){
        this.surname = event.target.value;
    }

    handleClick(event)
    {
        addTest(name,surname);
    }
}