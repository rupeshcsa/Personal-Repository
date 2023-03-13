import {  LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateContact extends LightningElement {
 
handleSuccess(event) {
    console.log('onsuccess event recordEditForm',event.detail.id);
}
handleSubmit(event) {
    console.log('onsubmit event recordEditForm'+ event.detail.fields);
}
//this method will call after clicking on cancle button to reset  form 
allowReset() {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
        
     }
//this will  shows sucess message on window after creation of contact
allowToastMessage()
{
    this.dispatchEvent(
        
        new ShowToastEvent({
            title: 'Success',
            message: 'Contact created successfully..!',
            variant: 'success',
           
            })
            );
           
        
}

    }

       

   
    






