import { Component } from '@angular/core';

declare let google: any;

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: module.id
})

export class AppComponent {
  zoom: number = 8;

  lat: number = 50.397941;
  lng: number = 30.492411;

  markers: Marker[] = [
    {
      name: 'Company',
      lat: 49.397941,
      lng: 30.102411,
      draggable: true
    },
    {
      name:  'Company',
      lat:  49.397941,
      lng:  30.102411,
      draggable: true
    }];

  mapClicked($event: any) {
    console.log("dfsd");
  }

  markerDragEnd(marker: Marker, $event: any) {
    console.log("faas");
  }

  clickMarker(marker: Marker, index: number){
    console.log('Clicked marker ' + marker.name + ' at index ' + index);
  }
}

interface Marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
