trigger Stock on Stock__c (after update, before update) {
    System.debug('Trigger.new : ' + Trigger.new);
    System.debug('Trigger.old : ' + Trigger.old);

    if(Trigger.isBefore && Trigger.isUpdate) {
        StockDateSetter.setLastRentedDateOnRental(Trigger.new, Trigger.oldMap);
    } else if(Trigger.isAfter && Trigger.isUpdate) {
        RentalGenerator generator = new RentalGenerator();
        generator.generateRentalsForRentedStock(Trigger.new, Trigger.oldMap);
    }
}