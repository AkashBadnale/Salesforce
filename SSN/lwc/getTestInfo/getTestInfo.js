import { LightningElement , track, wire} from 'lwc';
import getTestRelatedInformation from '@salesforce/apex/TestService.getTestRelatedInfo';
import { subscribe, MessageContext } from 'lightning/messageService';
import SEND_DATA_CHANNEL from '@salesforce/messageChannel/sendData__c';

/** 
const education_columns = [
    { label: 'HSC', fieldName: 'Higher_Secondary__c' },
    { label: 'Degree', fieldName: 'Degree__c' }
];

const jobs_columns = [
    { label: 'SSC', Organization: 'Organization__r.Name__c' },
    { label: 'HSC', Designation: 'Designation__c' }
];

const fav_columns = [
    { label: 'Category', fieldName: 'Favorite_Id__r.Category__c' },
    { label: 'Name', fieldName: 'Favorite_Id__r.Name__c' }
];
*/

const newcolumns = [
    { label: 'HSC', fieldName: 'Higher_Secondary__c' },
    { label: 'Degree', fieldName: 'Degree__c' },
    { label: 'Organization', fieldName: 'Organization__c' },
    { label: 'Designation', fieldName: 'Designation__c' },
    { label: 'Category', fieldName: 'Favorite_Id__c' },
    { label: 'Name', fieldName: 'Favorite_Id__c' }
];

export default class GetTestInfo extends LightningElement {
    
    columns = newcolumns;

    @track testD;

    @wire(MessageContext) messageContext;

    testid = '';
    testDataType = '';

    @wire(getTestRelatedInformation, { test: '$testid', type : '$testDataType' })
    wiredTest({ error, data }) {
            //Check if data exists 
            if (data) {
                this.testD = data;  
                console.log('-----------=============-----------');
                console.log(JSON.stringify(data));
            } else if (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }else{
		            // eslint-disable-next-line no-console
		            console.log('unknown error')
            }
        };

    

  subscribeToMessageChannel() {
    this.subscription = subscribe(
      this.messageContext,
      SEND_DATA_CHANNEL,
      (message) => this.handleMessage(message)
    );
  }

  handleMessage(message) {
    this.testid = message.mytestid;
    this.testDataType = message.columnDataType;
  }
  connectedCallback() {
    this.subscribeToMessageChannel();
  }

  /**
   *    this code should be written inside some method or this will throw error
   * 
   *            if ( testDataType == 'Education' ) {
                    columns = [
                        { label: 'HSC', fieldName: 'Higher_Secondary__c' },
                        { label: 'Degree', fieldName: 'Degree__c' }
                    ];
                } else if ( testDataType == 'Jobs' ) {
                    columns = [
                        { label: 'SSC', Organization: 'Organization__r.Name__c' },
                        { label: 'HSC', Designation: 'Designation__c' }
                    ];
                } else if ( testDataType == 'Favs' ) {
                    columns = [
                        { label: 'Category', fieldName: 'Favorite_Id__r.Category__c' },
                        { label: 'Name', fieldName: 'Favorite_Id__r.Name__c' }
                    ];
                }
   * 
   */
    
}