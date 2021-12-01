({
    secondEvent : function(component, event, helper) {
        //Get the event message attribute
        var message = event.getParam("message");
        //Set the handler attributes based on event data
        component.set("v.eventMessage", message + 'Akash');   
    }
})