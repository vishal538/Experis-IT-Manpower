import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaboyaTestComponent } from './daboya-test/daboya-test.component';

const routes: Routes = [
  {
  path: '',
  component: DaboyaTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

	/**
   **********************************************************************************
   *@author vishal.yadav
   *Author		    	:	  vishal.yadav
   *Project Name		: 	Experis IT Manpower
	 **********************************************************************************/