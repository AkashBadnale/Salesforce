import { LightningElement } from 'lwc';
import addTest from '@salesforce/apex/TestService.addTest';

export default class Test extends LightningElement {
    firstName;
    lastName;
    
    nameChange(event){
        this.firstName = event.target.value;
    }
    surnameChange(event){
        this.lastName = event.target.value;
    }

    handleClick(event)
    {
        addTest({name:this.firstName,surname:this.lastName});
    }
}