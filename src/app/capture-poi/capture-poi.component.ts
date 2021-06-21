import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'capture-poi',
  templateUrl: './capture-poi.component.html',
  styleUrls: ['./capture-poi.component.css']
})

export class CapturePoiComponent implements OnInit, AfterViewInit {
  public mapOption: google.maps.MapOptions;

  @ViewChild(GoogleMap) googleMap: GoogleMap;

  private placeService;

  @Input('latLng') latLng = new google.maps.LatLng(39.584457, -104.758155);
  @Input('map-height') mapHeight: string;
  @Input('map-width') mapWidth: string = '100%';
  @Input('zoom-level') zoomLevel: number = 12;

  constructor() {
    this.mapOption = { center: this.latLng, zoom: this.zoomLevel }
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.placeService = new google.maps.places.PlacesService(this.googleMap.googleMap)
    this.googleMap.mapClick.subscribe(
      event => {
        if (this.isIconMouseEvent(event)) {
          console.log("You clicked on place:" + event.placeId);
          event.stop();

          if (event.placeId) {
            this.getPlaceInformation(event.placeId);
          }
        }
      }
    )
  }

  isIconMouseEvent(e: google.maps.MapMouseEvent | google.maps.IconMouseEvent)
    : e is google.maps.IconMouseEvent {
    return "placeId" in e;
  }

  getPlaceInformation(placeId: string) {

    this.placeService.getDetails({ placeId: placeId }, (
      place: google.maps.places.PlaceResult | null,
      status: google.maps.places.PlacesServiceStatus
    ) => {
      if (status === "OK" && place && place.geometry && place.geometry.location
      ) {
        console.log(place)
      }
    }
    );
  }


}
