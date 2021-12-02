@RestResource(urlMapping='/Favorites/*')
global with sharing class FavoriteManager {
    public FavoriteManager() {

    }

    // https://workbench.developerforce.com/restExplorer.php

    // url to use - GET - /services/apexrest/Favorites/F-0001
    @HttpGet
    global static Favorite__c getFavoriteById(){
        RestRequest request = RestContext.request;
        //get the favorite id from end of the url
        String favId = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);

        Favorite__c fav = [ SELECT Name, Category__c, Name__c 
                            FROM Favorite__c
                            WHERE Name = :favId ];
        return fav;
    }

    // url to use - POST - /services/apexrest/Favorites
    // body ex : { ""category" : "Test", "name" : "Test"}
    @HttpPost
    global static ID createFavorite(String category, String name){
        Favorite__c fav = new Favorite__c();
        fav.Category__c = category;
        fav.Name__c = name;
        insert fav;
        return fav.Id;
    }

    // url to use - DELETE - /services/apexrest/Favorites/F-0005
    @HttpDelete
    global static void deleteFavorite(){
        RestRequest request = RestContext.request;
        //get the favorite id from end of the url
        String favId = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);

        Favorite__c fav = [ SELECT Id 
                            FROM Favorite__c
                            WHERE Name = :favId ];
        delete fav;
    }
}
