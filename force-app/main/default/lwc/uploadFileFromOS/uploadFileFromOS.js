import { LightningElement,api,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import { OmniscriptBaseMixin } from 'omnistudio/omniscriptBaseMixin'
export default class UploadFileFromOS extends OmniscriptBaseMixin(LightningElement) {
    
@track filesData= [];
     
get fileDataLength(){
    return this.filesData.length!=0;
}
openfileUpload(event) {
    const file = event.target.files[0]
    var reader = new FileReader()
    reader.onload = () => {
        var base64 = reader.result.split(',')[1]

        let fileData = {
            'filename': file.name,
            'base64Str': base64
            
        }
        
        console.log('this.fileData ==========='+JSON.stringify(fileData));
        this.filesData.push({'fileName':fileData.filename,'base64String':fileData.base64Str});
       
        this.omniUpdateDataJson(this.filesData);
     
        console.log('addAllFiles  === '+this.addAllFiles);
        
       
    }
   reader.readAsDataURL(file);
}

removeReceiptImage(event)
    {
    console.log('inside reomove ');    
    var index = event.currentTarget.dataset.id;
    console.log('index is ---'+index);
    this.filesData.splice(index, 1);
    this.omniUpdateDataJson(this.filesData);
    }



}