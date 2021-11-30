
<h1>How To Pass Values Between Two Aura Components</h1>

* First create an Aura Event, For example below consider like DataPassingFromFirstToSecondEvent

* Add the number of parameters you want to pass with the data type in the Event </br>
  `<aura:event type="APPLICATION" description="Event template">` </br>
      `<aura:attribute name="message" type="String" />` </br>
  `</aura:event>` </br>

* Then goto the component from which you want to pass the value, like below i want to pass value after clicking the button </br>
  * In .cmp </br>
  `<aura:registerEvent name="DataPassingFromFirstToSecondEvent" type="c:DataPassingFromFirstToSecondEvent"/>` </br>
  `<lightning:button label="Click to fire the event" variant="brand" onclick="{!c.firstEvent}"/>` </br>
  
  * In controller </br>
    `firstEvent : function(component, event, helper) {` </br>
         `//Get the event using event name.` </br>
         `var dataPassingEvent = $A.get("e.c:DataPassingFromFirstToSecondEvent");` </br>
         `//Set event attribute value` </br>
         `dataPassingEvent.setParams({"message" : "Welcome "});` </br>
         `dataPassingEvent.fire();` </br>
    `}` </br>
    
* Then goto the second component to which you want to pass the value
  * In .cmp </br>
    `<aura:attribute name="eventMessage" type="String"/>` </br>
    `<aura:handler event="c:DataPassingFromFirstToSecondEvent" action="{!c.secondEvent}"/>` </br>
    `<div class="slds-m-around_xx-large">` </br>
        `<p>{!v.eventMessage}</p>` </br>
    `</div>` </br>
   
  * In controller </br>
    `secondEvent : function(component, event, helper) {` </br>
        `//Get the event message attribute` </br>
        `var message = event.getParam("message");` </br>
        `//Set the handler attributes based on event data` </br>
        `component.set("v.eventMessage", message + 'Akash');` </br>  
    `}`  </br>
    
