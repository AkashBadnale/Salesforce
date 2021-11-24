import { LightningElement } from 'lwc';
import addTest from '@salesforce/apex/TestService.addTest';

export default class Test extends LightningElement {
    firstName;
    lastName;
    mobile;
    dob;
    email;
    
    nameChange(event){
        this.firstName = event.target.value;
    }
    surnameChange(event){
        this.lastName = event.target.value;
    }
    mobileChange(event){
        this.mobile = event.target.value;
    }
    dobChange(event){
        this.dob = event.target.value;
    }
    emailChange(event){
        this.email = event.target.value;
    }

    handleClick(event)
    {
        addTest({name:this.firstName,
                 surname:this.lastName,
                 phone:this.mobile,
                 birthday:this.dob,
                 mail:this.email});
    }
}