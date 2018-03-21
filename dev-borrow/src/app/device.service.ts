import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Device } from './device'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DeviceService {
  private devicesUrl = 'api/devices';
  constructor(private http: HttpClient) { }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.devicesUrl)
  }

  getDevice(id: number): Observable<Device> {
    const url = `${this.devicesUrl}/${id}`;
    return this.http.get<Device>(url)
  }

  deleteDevice(device: Device | number): Observable<Device> {
    const id = typeof device === 'number' ? device : device.id;
    const url = `${this.devicesUrl}/${id}`;
    return this.http.delete<Device>(url, httpOptions)
  }
}
