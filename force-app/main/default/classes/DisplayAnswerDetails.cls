public with sharing class DisplayAnswerDetails {
    @AuraEnabled(Cacheable = true)
    public static List<Answer__c> getObjectDetails(){ 

        List<Answer__c>  objectlist = [Select Question_Text__c,Answer_Type1__c From Answer__c];
        return objectlist;
    }

}