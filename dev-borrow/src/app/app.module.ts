import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DeviceService } from './device.service';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { AppRoutingModule } from './/app-routing.module';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
