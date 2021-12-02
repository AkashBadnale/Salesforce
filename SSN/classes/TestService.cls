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

        @AuraEnabled(cacheable=true)
        public static List<Test__c> getTestsAndRelatedData() {
                return [SELECT 
                          Name,
                          Name__c, 
                          Surname__c, 
                          ( SELECT Name FROM Education__r), 
                          ( SELECT Name , Organization__r.Name FROM Jobs__r), 
                          ( SELECT Favorite_Id__c FROM Tests_N_Favorites__r) 
                        FROM 
                          Test__c];
        }

        

        @AuraEnabled(cacheable=true)
        public static List<Education__c> getTestRelatedEducation(String test) {
                System.debug('%%%%%%%%%%'+test+'%%%%%%%%%%%%');
                /** 
                return [
                        SELECT Id, Degree__c, Diploma__c, Higher_Secondary__c, Senior_Secondary__c 
                        FROM Education__c
                        WHERE Test__c :test
                ]; */

                Education__c e1 = new Education__c();
                e1.Senior_Secondary__c = 'Saraswati Vidyalaya';
                e1.Higher_Secondary__c = 'Jaykranti Junior College';
                e1.Diploma__c = '';
                e1.Degree__c = 'BCA';
                Education__c e2 = new Education__c();
                e2.Senior_Secondary__c = 'JNV Latur';
                e2.Higher_Secondary__c = 'JNV Latur';
                e2.Diploma__c = '';
                e2.Degree__c = 'BTECH';

                List<Education__c> eList = new List<Education__c>();
                eList.add(e1);
                eList.add(e2);

                return eList;
        }

        @AuraEnabled(cacheable=true)
        public static List<SObject> getTestRelatedInfo(String test, String type) {
                if(type == 'Education'){
                        return [
                           SELECT Id, Degree__c, Diploma__c, Higher_Secondary__c, Senior_Secondary__c 
                           FROM Education__c
                           WHERE Test__r.Name = :test 
                        ];
                } else if( type == 'Jobs') {
                        return [
                           SELECT Id, Organization__r.Name__c, Designation__c 
                           FROM Job__c 
                           WHERE Test__r.Name = :test 
                        ];
                } else if ( type == 'Favs') {
                        return [
                           SELECT Id, Favorite_Id__r.Category__c, Favorite_Id__r.Name__c 
                           FROM Test_N_Favorite__c
                           WHERE Test_Id__r.Name = :test 
                        ];
                }
                return null;
        }        
    }