({
    firstEvent : function(component, event, helper) {
         //Get the event using event name.
         var dataPassingEvent = $A.get("e.c:DataPassingFromFirstToSecondEvent");
         //Set event attribute value
         dataPassingEvent.setParams({"message" : "Welcome "});
         dataPassingEvent.fire();
    }
})