import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Device } from './device';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DeviceService {
	private devicesUrl = 'http://5ab856de0937bb0014c61a85.mockapi.io/devices';
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

	updateDevice(device: Device): Observable<any> {
		const id = typeof device === 'number' ? device : device.id;
		const url = `${this.devicesUrl}/${id}`;
		return this.http.put(url, device, httpOptions)
	}

	addDevice(device: Device): Observable<Device> {
		return this.http.post<Device>(this.devicesUrl, device, httpOptions);
	}
}
