import { Component, OnInit } from '@angular/core';

import { LocatorService } from '../locator.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  zip = this.locatorService.getZipCode();

  constructor(
    // injection of services
    private locatorService: LocatorService,
  ) { }

  ngOnInit(): void {

  }

}
