# Salesforce
Salesforce Beginner

* Custom Object's Created For Learning & Development

 ** Child Relationship Names are very important for writing queries

![image](https://user-images.githubusercontent.com/39646462/145045642-411dc057-2b3c-4246-9f63-b3f71580ac89.png)


a simple query example  <b>`SELECT name__c, surname__c FROM Test__c`</b>

a complicated query will look like below : </br>
<b>
  `SELECT` </br>
     `Name__c,` </br>
	 `Surname__c,` </br>
	 `( SELECT Name FROM Education__r),` </br> 
	 `( SELECT Name , Organization__r.Name FROM Jobs__r),` </br>
	 `( SELECT Favorite_Id__c FROM Tests_N_Favorites__r)` </br>
`FROM` </br>
`Test__c` </b>
</br>
and this is how the result will look like, fetched records may be different based on the data present, just look at the column names

![image](https://user-images.githubusercontent.com/39646462/143824551-bd1aa999-7019-493f-9a7f-5252a6a186d5.png) </br>

* Another relationship query according to the above excel declared custom objects : </br>
  <b>`SELECT Organization__r.Name__c, Designation__c`</br>
	`FROM Job__c`</br> 
	   `WHERE Test__r.Name = 'T-0013'`</b> </br>
  
  <b>`SELECT Id, Degree__c, Diploma__c, Higher_Secondary__c, Senior_Secondary__c ` </br>
          `FROM Education__c` </br>
             `WHERE Test__r.Name = :test `</b> </br>
	   
  <b>`SELECT Id, Organization__r.Name__c, Designation__c` </br>
         `FROM Job__c` </br>
           `WHERE Test__r.Name = :test`</b> </br>
	   
  <b> `SELECT Id, Favorite_Id__r.Category__c, Favorite_Id__r.Name__c` </br>
                          `FROM Test_N_Favorite__c`</br>
                           `WHERE Test_Id__r.Name = :test` </b></br>



