import { Component, OnInit } from '@angular/core';

import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	device: Device = new Device;
	devices: Device[] = [];

	constructor(private deviceService: DeviceService) { }

	ngOnInit() {
		this.getDevices();
	}

	getDevices(): void {
		this.deviceService.getDevices()
			.subscribe(devices => {
				this.devices = devices;
			})
	};

	delete(device: Device): void {
		this.devices = this.devices.filter(d => d !== device);
		this.deviceService.deleteDevice(device).subscribe();
	}

	add() {
		console.log(this.device);
		this.device.id = 20;
		this.deviceService.addDevice(this.device).subscribe(device => {
			this.devices.push(device)
		});
	}
}
