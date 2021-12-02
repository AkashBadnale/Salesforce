import { LightningElement, wire, track  } from 'lwc';
import getTests from '@salesforce/apex/TestService.getTestsAndRelatedData';
import getTestRelatedInformation from '@salesforce/apex/TestService.getTestRelatedInfo';

const columns = [
    { label: 'Name', fieldName: 'Name__c' },
    { label: 'Surname', fieldName: 'Surname__c' },
    {type: "button", typeAttributes: {  
        label: 'Education',  
        name: 'Education',  
        title: 'Education',  
        disabled: false,  
        value: 'education',  
        iconPosition: 'left',  
    }},  
    {type: "button", typeAttributes: {  
        label: 'Jobs',  
        name: 'Jobs',  
        title: 'Jobs',  
        disabled: false,  
        value: 'jobs',  
        iconPosition: 'left'  
    }},
    {type: "button", typeAttributes: {  
        label: 'Fav',  
        name: 'Fav',  
        title: 'Fav',  
        disabled: false,  
        value: 'fav',  
        iconPosition: 'left'  
    }}    
];

export default class GetAllTests extends LightningElement {
    columns = columns;
    @track records;
    
    testid = '';
    @wire(getTestRelatedInformation, { test: '$testid' })
    testD;

    @wire(getTests) 
         wiredTests({ error, data }) {
            //Check if data exists 
            if (data) {
                this.records = data;
                console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%');
                console.log(data);
                console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%');
	              // eslint-disable-next-line no-console  
                console.log(JSON.stringify(data));
            } else if (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }else{
		            // eslint-disable-next-line no-console
		            console.log('unknown error')
            }
        }

        callRowAction( event ) {  
            const rowId =  event.detail.row.Name;  
            const actionName = event.detail.action.name;  
            
            if ( actionName === 'Education' ) { 
                this.testid = rowId;

                /**  
                this[NavigationMixin.Navigate]({  
                    type: 'standard__recordPage',  
                    attributes: {  
                        recordId: rowId,  
                        objectApiName: 'Account',  
                        actionName: 'edit'  
                    }  
                })  */
            } else if ( actionName === 'Jobs') {  
                alert('Jobs Button Clicked'+rowId) 
            }
            else if(actionName === 'Fav')
            {  
                alert('Fav Button Clicked');
            }
        }
}