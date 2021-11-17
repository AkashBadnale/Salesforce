public with sharing class PersonController {
    public PersonController() {

    }

  @AuraEnabled(cacheable=true)
  public static List<Person__c> getPersons() {
      return [SELECT First_Name__c, Last_Name__c, Email__c FROM Person__c];
  }
}
