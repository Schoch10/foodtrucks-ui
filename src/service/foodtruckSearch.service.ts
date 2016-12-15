import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Vendor } from "../model/vendor"
import { Location } from '../model/location';

@Injectable()
export class FoodtruckSearchService {

    private getTrucksForCityURL = 'http://data.streetfoodapp.com/1.1/schedule/';

    constructor(private http: Http) { }

    getFoodTrucksForCity(city: string) : Promise<any> {
        let url = 'http://localhost:8082';
        return this.http.get(url).toPromise()
            .then((res) => {
           return res.json();
        });
    }

    getFoodTrucks() : Observable<Vendor[]> {
        return this.http.get("http://localhost:8082").map(this.mapVendors);
    }

    searchFoodTrucks(searchParam:string) : Observable<any> {
        let url = 'http://localhost:8082/search/' + searchParam;
        return this.http.get(url).map(this.mapSearchVendors);
    }

    private mapSearchVendors(response:Response): Vendor[] {
        let jsonArray = response.json();
        console.log(jsonArray);
        let vendors: Vendor[] = [];
        jsonArray.map((jsonVendor:any) => {
            let vendor = new Vendor();
            vendor.name = jsonVendor.name;
            vendor.description = jsonVendor.description;
            vendor.twitter = jsonVendor.twitter;
            vendor.url = jsonVendor.url;
            vendor.phone = jsonVendor.phone;
            vendors.push(vendor);
        });
        return vendors;
    }

    private mapVendors(response:Response): Vendor[] {
        let obj = response.json().vendors;
        let vendors: Vendor[] = [];
        Object.keys(obj).map(key => {
            let vendor = new Vendor();
            vendor.name = obj[key].name;
            vendor.description = obj[key].description;
            vendor.twitter = obj[key].twitter;
            vendor.url = obj[key].url;
            vendor.phone = obj[key].phone;
            vendor.location = [];

            obj[key].open.map((local:any) => {
                let locale = new Location();
                locale.latitude = local.latitude;
                locale.longitude = local.longitude;
                locale.dayNumber = new Date(local.start * 1000).getDay();
                vendor.location.push(locale);
            });
            vendors.push(vendor);
        });
        return vendors;
    }
}