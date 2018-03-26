import { Component, OnInit, Input } from '@angular/core';

import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
	selector: 'app-devices',
	templateUrl: './devices.component.html',
	styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
	@Input() device: Device;
	devices: Device[];

	constructor(private deviceService: DeviceService) { }

	ngOnInit() {
		this.getDevices();
	}

	getDevices(): void {
		this.deviceService.getDevices()
			.subscribe(devices => this.devices = devices);
	};

	add(): void {
		this.deviceService.updateDevice(this.device)
			.subscribe(device => this.device = device);
	}
}
