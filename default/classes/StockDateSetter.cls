public with sharing class StockDateSetter {
    
    public static void setLastRentedDateOnRental(List<Stock__c> updatedStock,
                                                    Map<Id, Stock__c> oldValueMap) {

        for(Stock__c s : updatedStock) {
            if(s.Status__c == 'Rented' &&
                oldValueMap.get(s.Id).Status__c != 'Rented') {

                s.Last_Rented_Date__c = Date.today();
            }
        }
    }
}