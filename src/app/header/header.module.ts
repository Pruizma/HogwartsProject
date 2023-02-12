import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, HeaderComponentInfo } from '../header/header.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [HeaderComponent, HeaderComponentInfo],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [HeaderComponent, HeaderComponentInfo]
})
export class HeaderModule { }
