import { Component, Inject, OnInit } from '@angular/core';
import {FoodtruckSearchService} from "../../service/foodtruckSearch.service";
import { Http } from '@angular/http';

@Component({
    selector: 'map-container-component',
	templateUrl: './mapContainer.component.html',    
	styles: [require('./mapContainer.component.scss')],
    providers: [FoodtruckSearchService]
})

export class MapContainerComponent {

    constructor(private foodtruckService: FoodtruckSearchService) {
    }

    ngOnInit() {
        this.foodtruckService.getFoodTrucksForCity('boston')
            .then((res) => {
                console.log(res);
            });
    }
}