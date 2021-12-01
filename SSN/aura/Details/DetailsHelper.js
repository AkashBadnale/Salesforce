({
    getEducation: function(component) {
        var action = component.get('c.getTestRelatedEducation');
        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
          console.log(" --- EDUCATION ---",actionResult.getReturnValue());
          component.set('v.eduRecords', actionResult.getReturnValue());
      });
      $A.enqueueAction(action);
    }
})
