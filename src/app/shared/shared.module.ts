import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabDirective } from './directives/tab.directive';
import { WindowsizeDirective } from './directives/windowsize.directive';

@NgModule({
  declarations: [
    TabDirective,
    WindowsizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabDirective,
    WindowsizeDirective
  ]
})
export class SharedModule { }
