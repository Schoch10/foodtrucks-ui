import { Routes, RouterModule } from '@angular/router';
import { MapContainerComponent } from './MapContainer/mapContainer.component';
import { DesktopComponent } from './DesktopComponent/desktop.component';
import { iPhoneComponent } from './iPhoneComponent/iphone.component';
import { AndroidComponent } from './AndroidComponent/android.component';

let routeDesktop: Routes = [
	{ path: '', redirectTo: '/map', pathMatch: 'full' },
	{ path: 'desktopDownload', component: DesktopComponent },
	{ path: 'iosDownload', component: iPhoneComponent  },
	{ path: 'androidDownload', component: AndroidComponent },
	{ path: 'map', component: MapContainerComponent }
];

export const mapRoutes = RouterModule.forRoot(routeDesktop);
