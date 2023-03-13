public with sharing class GetShelterName {
    @AuraEnabled(Cacheable = true)
    public static List<ROP_Facility_Detail__c> getObjectDetails(){ 

        List<ROP_Facility_Detail__c>  objectlist = [SELECT From__c,To__c,Road_Adopted__c FROM ROP_Facility_Detail__c];

        
        return objectlist;
    }

   
}