import { LightningElement,wire, track } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ps/omniscriptBaseMixin';
import getStreetAddresses from '@salesforce/apex/DisplayMapLocations.getStreetAddresses';
export default class MapPOC extends OmniscriptBaseMixin(LightningElement) {
    
    mapMarkers = [
        {
            location: {
                City: 'Toronto',
                Country: 'CANADA',
                PostalCode: 'M5T 1T1',
                State: 'ON',
                Street: '431 College St',
            },
            title:'s2',
            type: 'Polygon',
            paths: [
                { lat: 43.605222, lng: -79.769898 },
                { lat: 43.604212, lng: -79.768364 },
                { lat: 43.603846, lng: -79.766712 },
                { lat: 43.604561, lng: -79.761777 },
                { lat: 43.604942, lng: -79.760865 },
                { lat: 43.605804, lng: -79.759524 },
            ],
            strokeColor: 'blue',
            strokeOpacity: 0.5,
            strokeWeight: 5,
            fillColor: 'black',
            fillOpacity: 0.5,
        },
        {
            location: {
                City: 'Toronto',
                Country: 'CANADA',
                PostalCode: 'M5T 1T1',
                State: 'ON',
                Street: '431 College St',
            },
            title: 'sf1'
        }
    ];


    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.target.selectedMarkerValue;
    }
}