import { LightningElement, api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import uploadFile from '@salesforce/apex/FileUploaderClass.uploadFile'

export default class FileUploaderCompLwc extends LightningElement{
    @api recordId;
    fileData;
    size;
    
    openfileUpload(event) {
       const file = event.target.files[0];
        console.log('hello world'+ file.size);
        this.size = file.size;
        var reader = new FileReader()
        reader.onload = () => {
            var base64 = reader.result.split(',')[1]
            this.fileData = {
                'filename': file.name,
                'base64': base64,
                'recordId': this.recordId
            }
            console.log(this.fileData)
        }
        reader.readAsDataURL(file)

        //this.handleClick();
    }
    
    handleClick(){
     if(this.size  > 20970 ){
            console.log('inside if'+ this.size);

        const {base64, filename, recordId} = this.fileData
        uploadFile({ base64, filename, recordId }).then(result=>{
            

           this.dispatchEvent(new ShowToastEvent({message:'file uploaded successfully 20970', varient:"success"}));
        })

        // uploadFile(this.fileData.base64, this.fileData.filename, this.fileData.recordId);
        // this.dispatchEvent(new ShowToastEvent({message:'file uploaded successfully 20970', varient:"success"}));

    }
    else 
    {
        console.log('inside else');
        this.dispatchEvent(new ShowToastEvent({message:'file  not uploaded successfully', varient:"error"}));
 
    }
}
   

}
