import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { TabDirective } from '../shared/directives/tab.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @ContentChildren(TabDirective) tabs: QueryList<TabDirective>;

  constructor() { }

  ngOnInit() {
  }

}
