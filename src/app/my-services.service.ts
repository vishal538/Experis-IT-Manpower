import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActiveFilters } from './model/model'

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {
   public spaceXBaseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private http: HttpClient) { }
  getSpaceXData(filters: ActiveFilters):Observable<any>{
    let url= this.spaceXBaseUrl;
    if(filters.launchSuccess){
      url = `${url}&launch_success=${filters.launchSuccess}`;
    }
    if(filters.landSuccess){
      url = `${url}&land_success=${filters.landSuccess}`;
    }
    if(filters.launchYear){
      url = `${url}&launch_year=${filters.launchYear}`;
    }
       return this.http.get(url); 
}
}
