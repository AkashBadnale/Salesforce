import { LightningElement, wire, track  } from 'lwc';
import getTests from '@salesforce/apex/TestService.getTestsAndRelatedData';
import getTestRelatedInformation from '@salesforce/apex/TestService.getTestRelatedInfo';
import { publish, MessageContext } from 'lightning/messageService';
import SEND_DATA_CHANNEL from '@salesforce/messageChannel/sendData__c';

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

    @wire(MessageContext)
  messageContext;

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
                //console.log(JSON.stringify(data));
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
            
            if ( actionName === 'Education' ) 
            { 
                const payload = { 
                    mytestid: rowId,
                    columnDataType : 'Education'
                };
                publish(this.messageContext, SEND_DATA_CHANNEL, payload);
            } 
            else if ( actionName === 'Jobs') 
            {  
                const payload = { 
                    mytestid: rowId,
                    columnDataType : 'Jobs'
                };
                publish(this.messageContext, SEND_DATA_CHANNEL, payload); 
            }
            else if(actionName === 'Fav')
            {  
                const payload = { 
                    mytestid: rowId,
                    columnDataType : 'Favs'
                };
                publish(this.messageContext, SEND_DATA_CHANNEL, payload);
            }
        }
}