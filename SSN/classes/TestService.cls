public with sharing class TestService {
    public TestService() { }

    @AuraEnabled
    public static string addTest(string name, string surname){
        
            Test__c test = new Test__c();
            test.Name__c=name;
            test.Surname__c=surname;
            insert test;
            return 'SUCCESS';
        
    }
    
}
