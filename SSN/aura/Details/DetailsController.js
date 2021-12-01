({
    dataHandleEvent : function(component, event, helper) {
        //Get the event message attribute
        var testid = event.getParam("tid");
        console.log(' ********** Test ID ********* '+testid);
        // get the method name
        var action = component.get("c.getTestRelatedEducation");
        action.setParams({ test : testid });

        helper.getEducation(component);
    },
    
    doInit : function(component, event, helper) {
        helper.getEducation(component);
    }
})
