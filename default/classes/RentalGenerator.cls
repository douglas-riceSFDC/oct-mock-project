public with sharing class RentalGenerator {
    
    public void generateRentalsForRentedStock(List<Stock__c> updatedStock,
                                                Map<Id, Stock__c> oldValueMap) {
        List<Rental__c> generatedRentals = new List<Rental__c>();

        for(Stock__c s : updatedStock) {
            if(s.Status__c == 'Rented' &&
                oldValueMap.get(s.Id).Status__c != 'Rented') {

                Rental__c newRental = new Rental__c();
                newRental.Stock__c = s.Id;
                newRental.Customer__c = UserInfo.getUserId();

                generatedRentals.add(newRental);
            }
        }

        insert generatedRentals;
    }
}