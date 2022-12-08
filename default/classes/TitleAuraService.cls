public with sharing class TitleAuraService {

    @AuraEnabled
    public static List<Title__c> getLatestTitles(Integer limiter) {
        System.debug('Entered getLatestTitles');
        return [
            SELECT Id, Name, Genre__c, Thumbnail__c, Available_Stock__c, Total_Stock__c
            FROM Title__c
            LIMIT :limiter
        ];
    }

}