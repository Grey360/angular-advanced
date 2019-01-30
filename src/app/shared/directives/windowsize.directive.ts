import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appWindowsize]'
})
export class WindowsizeDirective {

  constructor() { }

  @HostListener('window:resize', ['$event'])
  resize(event: any) {
    console.log(`The screen is being resized to ${event.target.innerWidth}`);
  }

}
