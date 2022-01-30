import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'aw-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  select(tab: TabComponent): void {
    this.tabs.forEach( tab => tab.selected = false);
    tab.selected = true;
  }

}
