import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dev-list',
	templateUrl: './dev-list.component.html',
	styleUrls: ['./dev-list.component.css']
})
export class DevListComponent implements OnInit {

	// datas list
	public arrDevices = [
		{ id: 1, name: 'iPhone X', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true },
		{ id: 2, name: 'iPhone 7', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: false },
		{ id: 3, name: 'Galaxy S9', osv: 'Android 7.2', manu: 'Samsung Inc', memorized: true },
		{ id: 4, name: 'iPad pro', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true },
		{ id: 5, name: 'Iphone 7 Plus', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: false },
		{ id: 6, name: 'Iphone 8 Plus', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true }
	];

	constructor() { }

	ngOnInit() {
	}

	// For show hide form
	public showFormAdd : boolean = false;

	// for add new device
	public newDv : string = "";
	public newOsv : string = "";
	public newManu : string = "";

	// add a device
	addDevice() {
		this.arrDevices.unshift ({
			id: this.arrDevices.length + 1,
			name: this.newDv,
			osv: this.newOsv,
			manu: this.newManu,
			memorized: true
		})
		// restat after added
		this.newDv ="",
		this.newOsv = "",
		this.newManu = "",
		/* hidden form after added */
		this.showFormAdd = false
	};

	// device remove
	deviceRemove(id: number){
		const index = this.arrDevices.findIndex(device => device.id === id);
		this.arrDevices.splice(index, 1);
	};

	// filter status
	public filterStatus : string = 'view_all';
	
	// check for filter
	getFilterStatus(memorized: boolean) {
		const viewAll = this.filterStatus==='view_all';
		const forViewBorrow = this.filterStatus === 'devAvailable' && memorized;
		const forViewReturn = this.filterStatus === 'devUsing' && !memorized;
		return viewAll || forViewBorrow || forViewReturn
	};
}
