public class ContactHandler {
    public void countContacts(List<Contact> newList)
    {
        try{
        //Create set of account Ids to query against
        set<id> accountIds=new set<id>();
        //check whether new list is not empty   
        if(newList!=null)
          {
        for(contact c:newList)
        {
            if(c.accountId!=null)
            {
                accountIds.add(c.accountId);
            }
        }
          }
        
        //Query all the accounts with related contact
        List<Account> accounts=[SELECT Id,Number_Of_Contacts__c,(SELECT Id from Contacts) from Account where Id in :accountIds];
        if(!accounts.isEmpty())
        {
            for(Account acc:accounts)
            {
                acc.Number_Of_Contacts__c=acc.contacts.size();
            }
        }
           update accounts;
    }
 catch(Exception e) {
    System.debug('An unexpected error has occurred: ' + e.getMessage());
}

}
}