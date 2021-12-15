
<h1> How to pass data from one LWC to another LWC </h1> </br>
<h2> You need to use pubsub ( Publisher Subscriber ) </h2> </br>
ex : </br>
</br>

`<?xml version="1.0" encoding="UTF-8" ?> `</br>
`<LightningMessageChannel xmlns="http://soap.sforce.com/2006/04/metadata"> `</br>
    `<masterLabel>send</masterLabel> `</br>
    `<isExposed>true</isExposed> `</br>
    `<description>send test id</description>` </br>
    ` <lightningMessageFields> `</br>
        `<fieldName>mytestid</fieldName> `</br>
        `<description>this is the test id</description> `</br>
    `</lightningMessageFields> `</br>
    `<lightningMessageFields> `</br>
        `<fieldName>columnDataType</fieldName>` </br>
        `<description>which data do you want. Like Education / Jobs / Favs</description> `</br>
    `</lightningMessageFields>` </br>
`</LightningMessageChannel> `</br> 
</br>
Here you have to decide how many fields do you want to pass </br>
</br>
Then you need to use the given below in your publisher LWC component : </br>
</br>
  `import { publish, MessageContext } from 'lightning/messageService';` </br>
  `import SEND_DATA_CHANNEL from '@salesforce/messageChannel/sendData__c';` </br>
</br>
  `@wire(MessageContext) `</br>
  `messageContext; `</br>
  </br>
`const payload = { ` </br>
                    `mytestid: rowId, `</br>
                    `columnDataType : 'Education'`</br>
                `};` </br>
                `publish(this.messageContext, SEND_DATA_CHANNEL, payload); `</br>
                </br>
Then you have to write like below in Subscriber LWC compoentn : </br>
</br>
`import { subscribe, MessageContext } from 'lightning/messageService'; `</br>
`import SEND_DATA_CHANNEL from '@salesforce/messageChannel/sendData__c';` </br>
</br>
`@wire(MessageContext) messageContext;` </br>
</br>
`testid = '';` </br>
    `testDataType = '';` </br>
    </br>
`subscribeToMessageChannel() { `</br>
    `this.subscription = subscribe( `</br>
      `this.messageContext, `</br>
      `SEND_DATA_CHANNEL,` </br>
     ` (message) => this.handleMessage(message) `</br>
   ` );` </br>
 ` }` </br>
</br>
  `handleMessage(message) { `</br>
   ` this.testid = message.mytestid; `</br>
    `this.testDataType = message.columnDataType; `</br>
 ` } `</br>
  `connectedCallback() { `</br>
    `this.subscribeToMessageChannel();` </br>
  `}` </br>
