import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mapRoutes } from './map.routes';
import { MapContainerComponent } from './MapContainer/mapContainer.component';
import { MapComponent } from './map.component';
import { DesktopComponent } from './DesktopComponent/desktop.component';
import { iPhoneComponent } from './iPhoneComponent/iphone.component';
import { AndroidComponent } from './AndroidComponent/android.component';
import { AppVerificationComponent } from './AndroidComponent/AndroidAppVerificationComponent/appVerification.component';
import { DeviceListComponent } from './DeviceListComponent/deviceList.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        mapRoutes,
        AgmCoreModule,
        ReactiveFormsModule
    ],
    declarations: [ MapContainerComponent, MapComponent, DesktopComponent, 
    iPhoneComponent, AndroidComponent, DeviceListComponent, AppVerificationComponent ],
})

export class DownloadModule {
}
