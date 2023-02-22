import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PersonViewComponent } from './person-view.component';

@NgModule({
  declarations: [PersonViewComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [PersonViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonViewModule { }
