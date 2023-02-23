import { LightningElement,track,api,wire } from 'lwc';
import GetShelterNameForYouth from '@salesforce/apex/GetShelterName.getShelter';
import { OmniscriptBaseMixin } from 'vlocity_ps/omniscriptBaseMixin';

export default class GetUnitNameforYouth extends OmniscriptBaseMixin(LightningElement) {


selectedValues ;
@track details;
@track error;
@api ObjName;
@track record;
    
@wire(GetShelterNameForYouth) 
list({ error, data }) {
    if (data) {
        this.record = data;
        console.log('this.record  === '+this.record);
        this.error = undefined;
    } else if (error) {
        this.error = error;
        this.record = undefined;
    }
}


handleGetSelectedValue(event){ 
        this.selectedValues = event.target.value;
        console.log(event.target.value);    
        console.log('this selected value = '+this.selectedValues);      
  
    }
   }