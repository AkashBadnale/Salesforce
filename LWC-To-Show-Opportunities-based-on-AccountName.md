
![image](https://user-images.githubusercontent.com/39646462/154104908-7e3710e7-bf92-4f12-ab66-2057deee216c.png)

this is like what we want to create
---------------------------------------------------------------------------------------------------------------

Apex Class ----- TestQueries.cls
---------------------------------------------------------------------------------------------------------------
public with sharing class TestQueries {
    public TestQueries() {}

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getRelatedOpportunities(String accountName){
        return [SELECT Id, Name FROM Opportunity WHERE Opportunity.Account.Name =:accountName];
    }
}


LWC component js file
---------------------------------------------------------------------------------------------------------------
import { LightningElement, wire } from 'lwc';
import findOpportunities from '@salesforce/apex/TestQueries.getRelatedOpportunities';

const DELAY = 300;

export default class TestTwo extends LightningElement {

    searchKey = '';

    @wire(findOpportunities, { accountName: '$searchKey' })
    opportunities;

    handleSearchKeyChange(event) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }

}


LWC component html file
-------------------------------------------------------------------------------------------------------------
`<template>`<br/>
    `<lightning-input type="search" onchange={handleSearchKeyChange} label="Enter Account Name" value={opportunitySearchKey}></lightning-input>`<br/>
    `<template if:true={opportunities.data}>`<br/>
        `<template for:each={opportunities.data} for:item="opportunity">`<br/>
            `<p key={opportunities.Id}>{opportunity.Name}</p>`<br/>
        `</template>`<br/>
    `</template>`<br/>
`</template>`<br/>


LWC component css file
-------------------------------------------------------------------------------------------------------------
`lightning-input {`<br/>
    `color:tomato;`<br/>
    `font-weight: bold;`<br/>
`}`<br/>
`p {`<br/>
    `color: saddlebrown;`<br/>
    `font-weight: bold;`<br/>
`}`<br/>


