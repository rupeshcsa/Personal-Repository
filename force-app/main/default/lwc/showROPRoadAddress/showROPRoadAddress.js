import { LightningElement, api,track, wire } from 'lwc';
import getObjectDetails from '@salesforce/apex/GetShelterName.getObjectDetails';
import { OmniscriptBaseMixin } from 'vlocity_ps/omniscriptBaseMixin';

export default class ShowROPRoadAddress extends OmniscriptBaseMixin(LightningElement){

@track columns = [{
    label: 'From - To ',
     fieldName: 'FromTo',
      type: 'text'
    },
    {
    label: 'Street Name',
    fieldName: 'Road_Adopted__c',
    type : 'text',

    }
];

@track details;
@track error;
    
@wire(getObjectDetails) 
list({ error, data }) {
    if (data) {
        let mdm;
        this.details = data.map(record => {
            mdm = record.To__c ? record.To__c : '';
            return { FromTo: `From ${record.From__c} to ${mdm}`, ...record } 
          });
        console.log('this.record  === '+this.record);
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.details = undefined;
    }
}

handleRowSelection = event => {
    var selectedRows=event.detail.selectedRows;
    console.log('selected row outside if = '+JSON.stringify(selectedRows));
    if(selectedRows.length>1)
    {
        selectedRows = selectedRows[1];
        var el = this.template.querySelector('lightning-datatable');
        el.selectedRows=el.selectedRows.slice(1);
        console.log('selected row inside if = '+JSON.stringify(selectedRows));

    }
    this.omniUpdateDataJson(selectedRows);
    return;
}
  
}