
* component code </br>
  <aura:iteration items="{!test.Education__r}" var="education"> </br>
     <button <b>data-id="{!test.Name}" onclick="{!c.educationEvent}" </b> >{!education.Name}</button> </br>
  </aura:iteration> </div> </br>
  
* Controller code </br>
  educationEvent : function(component, event, helper) { </br>
      console.log('---------- Education Button Click Event ------------'); </br>
      <b>var testid = event.target.dataset.id; </b> </br>
      console.log('---------- '+ testid +' ------------'); </br>
  } </br>
