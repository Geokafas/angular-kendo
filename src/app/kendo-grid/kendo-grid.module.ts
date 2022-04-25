import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoGridComponent } from './kendo-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { routes } from './kendo-grid.routing';
import { RouterModule } from '@angular/router';
import { kendoGridService } from './kendo-grid.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';


@NgModule({
  declarations: [
    KendoGridComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    ReactiveFormsModule,
    FormsModule,
    MdbCollapseModule,
    RouterModule.forChild(routes)
  ],
  providers:[kendoGridService]
})
export class KendoGridModule { }