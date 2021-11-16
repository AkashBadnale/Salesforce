public with sharing class SsnLwcComponent {
    public SsnLwcComponent() {

    }

    @AuraEnabled
    public static Person__c submitPersonAction(
        string firstName, string middleName, string lastName, string email, integer mobile ) {

            Person__c newPerson = new Person__c();
            newPerson.First_Name__c=firstName;
            newPerson.Middle_Name__c=middleName;
            newPerson.Last_Name__c=lastName;
            newPerson.Email__c=email;
            newPerson.Mobile_Number__c=mobile;

            insert newPerson;
            return newPerson;
    }
}
