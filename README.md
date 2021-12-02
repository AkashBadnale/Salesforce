# Salesforce
Salesforce Beginner

* Custom Object's Created For Learning & Development

![image](https://user-images.githubusercontent.com/39646462/143823813-1df71673-4dda-463a-8851-45592acf66a7.png)

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
  <b>`SELECT Organization__r.Name__c, Designation__c FROM Job__c WHERE Test__r.Name = 'T-0013'`</b> </br>




