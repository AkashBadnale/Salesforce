({
    getTestList: function(component) {
      var action = component.get('c.getTestsAndRelatedData');
      // Set up the callback
      var self = this;
      action.setCallback(this, function(actionResult) {
        console.log(" --- RESULT ---",actionResult.getReturnValue());
        component.set('v.testRecords', actionResult.getReturnValue());
    });
    $A.enqueueAction(action);
    }
})