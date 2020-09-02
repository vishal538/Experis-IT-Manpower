import { Component, OnInit } from '@angular/core';
import { MyServicesService } from '../my-services.service';
import { BehaviorSubject } from 'rxjs';
import { ActiveFilters } from '../model/model';

@Component({
  selector: 'app-daboya-test',
  templateUrl: './daboya-test.component.html',
  styleUrls: ['./daboya-test.component.css']
})
export class DaboyaTestComponent implements OnInit {
  title = 'Expris IT Task';
  public activeFilters: ActiveFilters = new ActiveFilters();
  public posts: Array<any> = [];
  constructor(private service: MyServicesService) {
    this.filterData();
  }
  ngOnInit(): void {
  }
  filterLaunchYear(launchYear: string): void {
    if (this.activeFilters.launchYear === launchYear) {
      this.activeFilters.launchYear = '';
    } else {
      this.activeFilters.launchYear = launchYear;
    }
    this.filterData();
  }
  filterLaunchSuccess(launchSuccess: boolean): void {
    if (this.activeFilters.launchSuccess !== null && this.activeFilters.launchSuccess === launchSuccess) {
      this.activeFilters.launchSuccess = null;
    } else {
      this.activeFilters.launchSuccess = launchSuccess;
    }
    this.filterData();
  }
   //  In all data API there is not any field for land sucess, But still I already integrated , you can just 
  // change backend data it will work accordingly.
  
  filterLandSuccess(landSuccess: boolean): void {
    if (this.activeFilters.landSuccess !== null && this.activeFilters.landSuccess === landSuccess) {
      this.activeFilters.landSuccess = null;
    } else {
      this.activeFilters.landSuccess = landSuccess;
    }
    this.filterData();
  }
  public filterData(): void {
    this.service.getSpaceXData(this.activeFilters).subscribe(response => {
      this.posts = response; 
    },
      (err) => alert("Failed to fetch data from SpaceX"));
  }
}



/**
**********************************************************************************
*@author vishal.yadav
*Author		    	:	  vishal.yadav
*Project Name		: 	Experis IT Manpower
**********************************************************************************/