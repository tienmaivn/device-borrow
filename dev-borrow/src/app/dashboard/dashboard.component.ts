import { Component, OnInit } from '@angular/core';

import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	devices: Device[] = [];

	constructor(private deviceService: DeviceService) { }

	ngOnInit() {
		this.getDevices();
	}

	getDevices(): void {
		this.deviceService.getDevices()
			.subscribe(devices => this.devices = devices);
	}

	delete(device: Device): void {
		this.devices = this.devices.filter(d => d !== device);
		this.deviceService.deleteDevice(device).subscribe();
	}

	// add(name: string): void {
	// 	name = name.trim();
	// 	if (!name) { return; }
	// 	this.deviceService.addDevice({ name } as Device)
	// 		.subscribe(device => {
	// 			this.devices.push(device);
	// 		});
	// }
}
