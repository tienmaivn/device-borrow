import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Device } from './device';
import { DEVICES } from './mock-devices';

@Injectable()
export class DeviceService {

  getDevices(): Observable<Device[]> {
    return of(DEVICES);
  }
  
  getDevice(id: number): Observable<Device> {
    return of(DEVICES.find(device => device.id === id));
  }
}
