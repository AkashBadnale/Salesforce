public with sharing class TestService {
    public TestService() { }

    @AuraEnabled
    public static string addTest(string name, string surname){
        
            Test__c test = new Test__c();
            test.name__c=name;
            test.surname__c=surname;

            System.debug('-----------'+name+'-----------'+surname);
            
            insert test;
            return 'SUCCESS';
        
    }
    
}
