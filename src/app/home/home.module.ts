import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderModule } from '../header/header.module';
import { PersonViewModule } from '../shared/person-view/person-view.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
    DragDropModule,
    MatTabsModule,
    PersonViewModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent},
    ])
  ],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
