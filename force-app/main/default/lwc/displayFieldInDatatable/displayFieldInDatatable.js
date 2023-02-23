import { LightningElement, api,track, wire } from 'lwc';
import getObjectDetails from '@salesforce/apex/DisplayAnswerDetails.getObjectDetails';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin';

export default class DisplayFieldInDatatable extends OmniscriptBaseMixin(LightningElement) {
    @track columns = [{
        label: 'Question Text',
        fieldName: 'Question_Text__c',
        type : 'Formula',
    },
    {
        label: 'Answer Type',
        fieldName: 'Answer_Type1__c',
        type : 'Text Area',
    
    }
];

@track details;
@track error;
    
@wire(getObjectDetails) 
list({ error, data }) {
    if (data) {
        this.details = data;
        console.log('this.record  === '+this.record);
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.details = undefined;
    }
}
handleRowSelection = event => {
    var selectedRows=event.detail.selectedRows;
    if(selectedRows.length>1)
    {
        selectedRows = selectedRows[1];
        var el = this.template.querySelector('lightning-datatable');
        el.selectedRows=el.selectedRows.slice(1);
       
    }
    this.omniUpdateDataJson(selectedRows);
    return;
}
  

}