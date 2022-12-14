public with sharing class StockAuraService {

    @AuraEnabled
    public static List<Stock__c> getAllChildStock(Id titleId) {
        return [
            SELECT Id, Name, Status__c
            FROM Stock__c
            WHERE Title__c = :titleId
        ];
    }

}