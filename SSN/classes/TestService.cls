    public with sharing class TestService {
        public TestService() { }

        @AuraEnabled
        public static string addTest(String name, String surname, Integer phone, Date birthday, String mail){
            
                Test__c test = new Test__c();
                test.name__c=name;
                test.surname__c=surname;
                test.dob__c=birthday;
                test.mobile__c=phone;
                test.mail__c=mail;

                System.debug('-----'+name+'-----'+surname+'-----'+phone+'-----'+birthday+'-----'+mail);
                
                insert test;
                return 'SUCCESS';
            
        }

        @AuraEnabled(cacheable=true)
        public static List<Test__c> getTests() {
                return [SELECT name__c, surname__c FROM Test__c];
        }
        
    }
