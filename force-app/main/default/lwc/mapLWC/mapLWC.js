import { LightningElement,track } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ps/omniscriptBaseMixin';

export default class MapLWC extends OmniscriptBaseMixin(LightningElement) {
    
    mapMarkers;

    connectedCallback(){
        // this.mapMarkers = this.omniJsonData.mapMarkers;
        this.mapMarkers = this.omniJsonData.ROP;
    }

    markersTitle = 'Coordinates for Centering';

    center = {
        location: { Latitude: '43.836337', Longitude: '-79.874484' },
    };

    handleMarkerSelect(event){
        this.selectedMarkerValue = event.target.selectedMarkerValue;
        let selectedMapValue = {
            "selectedValue": event.target.selectedMarkerValue,
        }
        console.log('selectedMarkerValue====='+ JSON.stringify(this.selectedMarkerValue));
        this.omniUpdateDataJson(selectedMapValue);
    }

}