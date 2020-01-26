import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SassHelpersComponent} from './sass-helpers.component';

@NgModule({
  declarations: [SassHelpersComponent],
  imports: [
    CommonModule
  ],
  exports: [SassHelpersComponent]
})
export class SassHelpersModule { }
