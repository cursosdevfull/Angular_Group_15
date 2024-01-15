import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SalesComponent } from './components/sales/sales.component';
import { IncomesMonthlyComponent } from './components/incomes-monthly/incomes-monthly.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PendingComponent } from './components/pending/pending.component';

@NgModule({
  declarations: [DashboardComponent, SalesComponent, IncomesMonthlyComponent, CheckoutComponent, PendingComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedModule,
    NgApexchartsModule,
  ],
})
export class DashboardModule {}
