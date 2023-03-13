import { LightningElement, wire,api} from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import COUNT_FIELD from '@salesforce/schema/Account.Number_Of_Contacts__c';
    
    const fields = [NAME_FIELD, COUNT_FIELD];
     //below class will display value of  count on lwc-2
    export default class GetDataDisplayData extends LightningElement {
        @api recordId;
         //below code will wire list of Account data  
        @wire(getRecord, { recordId: '$recordId', fields })
        account;
      //below code will wire list of contacts count from account object 
       get getCount() {
            return getFieldValue(this.account.data, COUNT_FIELD);
           
        }
        
    }
