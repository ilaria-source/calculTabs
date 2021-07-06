import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  subText = '';
  mainText = '';
  operand1: number;
  operand2: number;
  operator = '';
  calculationString = '';
  answered = false;
  operatorSet = false;
  constructor() { }

  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+'
    || key === '<=' || key === '±' || key === '%' || key === 'x!'
    || key === 'x^' || key === 'ln' || key === 'e' || key === 'x²'
    || key === 'log' || key === 'cos' || key === '√' || key === 'sin'
    || key === 'tan' || key === '°' || key === 'rad' || key === 'n'
    ) {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+'
      || lastKey === '<=' || lastKey === '±' || lastKey === '%' || lastKey === 'x!'
      || lastKey === 'x^' || lastKey === 'ln' || lastKey === 'e' || lastKey === 'x²'
      || lastKey === 'log' || lastKey === 'cos' || lastKey === '√' || lastKey === 'sin'
      || lastKey === 'tan' || lastKey === '°' || lastKey === 'rad' || lastKey === 'n'
      )  {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.mainText === '')) {
        return;
      }
      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
  }

  allClear() {
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
  }

  getAnswer() {
    this.calculationString = this.mainText;
    this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
    if (this.operator === '/') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 / this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = this.mainText.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 * this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 - this.operand2).toString();
      this.subText = this.calculationString;
    } else if (this.operator === '+') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 + this.operand2).toString();
      this.subText = this.calculationString;
      if (this.mainText.length > 9) {
        this.mainText = 'ERROR';
        this.subText = 'Range Exceeded';
      }
    } else if (this.operator === '√') {
      this.subText = this.mainText;
      this.mainText = Math.sqrt(this.operand1).toString();
    } else if (this.operator === 'x²') {
      this.subText = this.mainText;
      this.mainText = (this.operand1 * this.operand1).toString();
    } else if (this.operator === 'ln' ){
      this.subText = this.mainText;
      this.mainText = Math.log(this.operand1).toString();
    } else if (this.operator === 'sin'){
      this.subText= this.mainText;
      this.mainText = Math.sin(this.operand1).toString();
    } else if (this.operator === 'cos'){
      this.subText= this.mainText;
      this.mainText = Math.cos(this.operand1).toString();
    } else if (this.operator === 'tan'){
      this.subText= this.mainText;
      this.mainText = Math.tan(this.operand1).toString();
    } else if (this.operator === 'log'){
      this.subText= this.mainText;
      this.mainText = Math.log10(this.operand1).toString();
    } else if (this.operator === 'e'){
      this.subText= this.mainText;
      this.mainText = Math.E(this.operand1).toString();
    }

    else
    {
      this.subText = 'ERROR: Invalid Operation';
    }
    this.answered = true;
  }

  ngOnInit() {}

}
