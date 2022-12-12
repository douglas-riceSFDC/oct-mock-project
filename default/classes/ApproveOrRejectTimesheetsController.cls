public with sharing class ApproveOrRejectTimesheetsController {

    @AuraEnabled(cacheable=true)
    public static List<Timesheet__c> getTimesheetsByProject(Id projectId) {
        return [
            SELECT Id, Name, CreatedDate, Employee__c, Total_Number_of_Hours__c, Employee__r.Name, Status__c
            FROM Timesheet__c
            WHERE Project__c = :projectId
        ];
    }

    @AuraEnabled
    public static void approveOrRejectTimesheets(List<Timesheet__c> timesheets, String operation){
        try {
            for(Timesheet__c timesheet : timesheets) {
                timesheet.Status__c = operation;
            }
            
            update timesheets;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}