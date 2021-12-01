({
    doInit : function(component, event, helper) {
      helper.getTestList(component);
    },

    educationEvent : function(component, event, helper) {
      console.log('---------- Education Button Click Event ------------');
      var testid = event.target.dataset.id;
      console.log('---------- '+ testid +' ------------');

      //Get the event using event name.
      var dataPassingEvent = $A.get("e.c:DataForDetails");
      //Set event attribute value
      dataPassingEvent.setParams({"tid" : testid});
      dataPassingEvent.fire();
    }

})