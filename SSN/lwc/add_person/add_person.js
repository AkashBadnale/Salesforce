import { LightningElement, track } from 'lwc';
import submitPersonAction from '@salesforce/apex/SsnLwcComponent.submitPersonAction';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

export default class Add_person extends NavigationMixin ( LightningElement ) {
    @track personObjectFirstName;
    @track personObjectMiddleName;
    @track personObjectLastName;
    @track personObjectEmail;
    @track personObjectPhone;

   personHandleChange(event){
      if(event.target.name == 'pesonFirstName'){
        this.personObjectFirstName = event.target.value;  
        }
      if(event.target.name == 'pesonMiddleName'){
        this.personObjectMiddleName = event.target.value;  
      }

      if(event.target.name == 'pesonLastName'){
        this.personObjectLastName = event.target.value;  
      }
      if(event.target.name == 'pesonEmail'){
        this.personObjectEmail = event.target.value;  
      }
      if(event.target.name == 'pesonPhone'){
        this.personObjectPhone = event.target.value;  
      }


 }

 submitAction(){
    submitPersonAction({cardFirstName:this.personObjectFirstName,cardMiddleName:this.personObjectMiddleName,cardLastName:this.personObjectLastName,cardEmail:this.personObjectEmail,cardMobile:this.personObjectPhone})
    .then(result=>{
        this.Name = result.Id;
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Record created successfully',
            variant:'success'
          });
          this.dispatchEvent(toastEvent);

          /*Start Navigation*/
          this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.scoreRecoreId,
                objectApiName: 'Person__c',
                actionName: 'view'
            },
         });
         /*End Navigation*/

    })
    .catch(error =>{
       this.errorMsg=error.message;
       window.console.log(this.error);
    });

 }
}