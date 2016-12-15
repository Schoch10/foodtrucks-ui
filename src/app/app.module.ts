import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { DownloadModule } from '../components/downloadModule.module';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const imports = [
	BrowserModule,
	RouterModule,
	DownloadModule,
	appRoutes,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDkRQrJpqAUnGY_GXu__6xBn6QgJZY_3Js'
    })
]

@NgModule({
  imports,
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
