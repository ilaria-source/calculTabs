import { Component } from '@angular/core';
import { TypeCalc } from '../models/enums/typeCalculator.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  public dataCalcList: {typeName: TypeCalc; url: string; isOn: boolean}[] = [
    {typeName: TypeCalc.classic, url: '/tabs/tab2', isOn: true},
    {typeName: TypeCalc.scientific, url: '/tabs/tab3', isOn: false},
    {typeName: TypeCalc.programmer, url: '/tabs/tab4', isOn: false}
  ];
  constructor() {}

}
