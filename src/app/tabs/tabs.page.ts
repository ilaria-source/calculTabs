import { Component } from '@angular/core';
import { TypeCalc } from '../models/enums/typeCalculator.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public dataCalcList: {typeName: TypeCalc; icon: string; isOn: boolean; element: string}[] =
  [
    {typeName: TypeCalc.classic,icon: 'bug',  isOn: true, element: 'tab2'},
    {typeName: TypeCalc.scientific,icon: 'construct',  isOn: true, element: 'tab3'},
    {typeName: TypeCalc.programmer,icon: 'save',  isOn: false, element: 'tab4'}
  ];

}
