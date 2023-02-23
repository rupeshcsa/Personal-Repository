import { LightningElement,track } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ps/omniscriptBaseMixin';

export default class MapLWC2 extends OmniscriptBaseMixin(LightningElement) {
    mapMarkers;
    renderedCallback() {
        let self = this;
        let html = "";
        
        this.mapMarkers.forEach(marker => {
            console.log('markerrr ==>> ', marker);
            let div = `<div style="cursor:pointer; padding:15px" data-markerid="${marker.value}" data-road-${marker.Id} data-markerfrom="${marker.from}" data-markerto="${marker.to}" class="road-item"><strong>${marker.location.Street}</strong><div>From ${marker.from} To ${marker.to}</div></div>`;
            html = html + div;
        })
        let roadList = this.template.querySelector(".road-list-display");
        roadList.innerHTML = html

        let items = this.template.querySelectorAll(".road-item");
        items.forEach(item => {
            if (item != null) {
                console.log('item', item);
                item.addEventListener("click", function(){
                    console.log('data =>>', item.dataset.markerid);
                    console.log('data1 other ==>>', JSON.stringify(item.dataset.markerfromto));
                    self.updateOmni({ "selectedValue" :  item.dataset.markerid, "selectedfrom" : item.dataset.markerfrom, "selectedto" : item.dataset.markerto});
                    items.forEach(x => x.style.backgroundColor = '')
                    item.style.backgroundColor = '#ADD8E6'
                }, false);
                
            }
        })
    }
    connectedCallback(){
        // let markers = [...this.omniJsonData.ROP];
        // markers.forEach(marker => {
        //     if (marker.from && marker.to && marker.from != '' && marker.to != '') {
        //         let obj = {}
        //         let from = marker.from
        //         let to = marker.to
        //         let paths = []
        //         let fromArray = from.split(',')
        //         let toArray = to.split(',')
        //         paths.push({lat:parseFloat(fromArray[0]), lng:parseFloat(fromArray[1])})
        //         paths.push({lat:parseFloat(toArray[0]), lng:parseFloat(toArray[1])})
        //         obj.location = marker.location
        //         obj.paths = paths
        //         obj.value = marker.value
        //         obj.title = marker.title
        //         obj.fillColor = 'black'
        //         obj.fillOpacity = 0.5
        //         obj.strokeWeight = 5
        //         obj.strokeColor = 'blue'
        //         obj.type = 'Polygon'
        //         obj.strokeOpacity = 0.5
        //         markers.push(obj)
        //     }
        // })
        this.mapMarkers = this.omniJsonData.ROP;
        this.external = this;
        // this.mapMarkers = markers;
        
        // document.querySelector("[data-road-list]").innerHTML = html;
    }
    
    markersTitle = 'Select A Road';
    updateOmni = (obj) => {
        console.log("Update Omni Ran")
        this.omniUpdateDataJson(obj);
        console.log('obj'+JSON.stringify(obj));
    }
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

    handlelistview='hidden';
    

    handleRoad(){
        console.log('handleRoad Click');
        this.handlelistview='visible';
    }

    showFullMap(){
        console.log('showFull Map active');
        this.handlelistview='hidden';
    }

}