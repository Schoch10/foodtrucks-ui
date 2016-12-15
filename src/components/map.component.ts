import { Component, OnInit } from '@angular/core';
import { FoodtruckSearchService } from "../service/foodtruckSearch.service";
import { Location } from '../model/location';
import { Vendor } from '../model/vendor';
import {Observable} from "rxjs";
import {ReactiveFormsModule, FormControl} from '@angular/forms';


@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styles: [require('./map.component.scss')],
})

export class MapComponent {

	lat: number = 42.3601;
	lng: number = 71.0589;
	vendors: Vendor[] = [];
	vendorList: Vendor[] = [];
	searchResults: Vendor[] = [];
	activeDay: number = 0;
	arrayDay: number = 0;
	requestArray: any[] = [];
	search = new FormControl();
	selectedVendor: Vendor;
	vendorSelected: boolean = false;
	showAutocomplete: boolean = false;

	constructor(private foodtruckService: FoodtruckSearchService) {
	}

	ngOnInit() {

		this.getTrucks();
		this.searchTrucks();
		this.selectedVendor = new Vendor();
	}

	selectVendor(event:any, index:any) {
		this.vendorSelected = true;
		this.showAutocomplete = false;
		this.selectedVendor = this.searchResults[index];
	}

	private getTrucks() {
		this.foodtruckService.getFoodTrucks().subscribe(
			(res) => {
				this.vendorList = res.filter(x => x.location.length > 0);
				this.vendors = this.vendorList;
				this.lat = this.vendors[0].location[0].latitude;
				this.lng = this.vendors[0].location[0].longitude;
			},
			err => console.log(err)
		);
	}

	private searchTrucks() {
		this.search.valueChanges
			.debounceTime(400).distinctUntilChanged()
			.flatMap(test => this.foodtruckService.searchFoodTrucks(test))
			.subscribe((res) => {
				this.searchResults = res;
				this.showAutocomplete = true;
			},
			err => console.log(err));

	}

	filterByDay(dayNumber: number) {
		this.activeDay = dayNumber;
		this.arrayDay = dayNumber - 1;
		this.vendors = this.vendorList.filter(x => x.location.length > this.arrayDay);
	}
}