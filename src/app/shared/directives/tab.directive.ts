import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'app-tab'
})
export class TabDirective {
  @Input() title: string;
  @Input() link: string;
  constructor() { }

}
