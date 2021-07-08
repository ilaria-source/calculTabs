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
    if (key === '÷' || key === '*' || key === '-' || key === '+'
    || key === '<=' || key === '±' || key === '%' || key === 'x!'
    || key === 'x^' || key === 'ln' || key === 'e' || key === 'x²'
    || key === 'log' || key === 'cos' || key === '√' || key === 'sin'
    || key === 'tan' || key === '°' || key === 'rad' || key === 'π'
    ) {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '÷' || lastKey === '*' || lastKey === '-' || lastKey === '+'
      || lastKey === '<=' || lastKey === '±' || lastKey === '%' || lastKey === 'x!'
      || lastKey === 'x^' || lastKey === 'ln' || lastKey === 'e' || lastKey === 'x²'
      || lastKey === 'log' || lastKey === 'cos' || lastKey === '√' || lastKey === 'sin'
      || lastKey === 'tan' || lastKey === '°' || lastKey === 'rad' || lastKey === 'π'
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

  allClear()
  {
    this.mainText = '';
    this.subText = '';
    this.operatorSet = false;
  }
//getAnswer viene richiamato dall'uguale
  getAnswer()
  {
    this.calculationString = this.mainText;
    this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);

    if (this.operator === '÷')
    {
      this.divide();
    }
    else if (this.operator === '*')
    {
      this.multiply();
    }
    else if (this.operator === '-')
    {
      this.subtraction();
    }
    else if (this.operator === '+')
    {
      this.sum();
    }
    else if (this.operator === '√')
    {
      this.squareRoot();
    }
    else if (this.operator === 'x²')
    {
      this.square();
    }
    else if (this.operator === 'ln')
    {
      this.ln();
    }
    else if (this.operator === 'sin')
    {
      this.sin();
    }
    else if (this.operator === 'cos')
    {
      this.cos();
    }
    else if (this.operator === 'tan')
    {
      this.tan();
    }
    else if (this.operator === 'log')
    {
      this.log();
    }
    else if (this.operator === 'e')
    {
      this.exp();
    }
    else if (this.operator === 'x!')
    {
      this.factorial();
    }
    else if (this.operator === '°')
    {
      this.degrees();
    }
    else if (this.operator === 'rad')
    {
      this.radians();
    }
    else if (this.operator === 'x^')
    {
      this.exponent();
    }
    else if (this.operator === '%')
    {
      this.percent();
    }
    else if (this.operator === 'π')
    {
      this.pi();
    }
    else if (this.operator === '±')
    {
      this.plusMinus();
    }

    else
      {
        this.subText = 'ERROR: Invalid Operation';
      }
      this.answered = true;
  }


  backspace()
	{
		this.subText= this.mainText;
		this.mainText =  this.mainText.substring(0, this.mainText.length - 1);
	}

  divide()
	{
		this.subText = this.mainText;
		this.mainText = (this.operand1 / this.operand2).toString();
		this.subText = this.calculationString;
		if (this.mainText.length > 9)
		{
			this.mainText = this.mainText.substr(0, 9);
		}
	}

	multiply()
	{
		this.subText = this.mainText;
		this.mainText = (this.operand1 * this.operand2).toString();
		this.subText = this.calculationString;
		if (this.mainText.length > 9)
		{
			this.mainText = 'ERROR!!';
			this.subText = 'Range Exceeded';
		}
	}

	subtraction()
	{
		this.subText = this.mainText;
		this.mainText = (this.operand1 - this.operand2).toString();
		this.subText = this.calculationString;
	}

	sum()
	{
		this.subText = this.mainText;
		this.mainText = (this.operand1 + this.operand2).toString();
		this.subText = this.calculationString;
    if (this.mainText.length > 9)
    {
      this.mainText = 'ERROR!!';
      this.subText = 'Range Exceeded';
	  }
  }

  squareRoot()
  {
    this.subText = this.mainText;
		this.mainText = Math.sqrt(this.operand1).toString();
  }

	square()
	{
		this.subText = this.mainText;
		this.mainText = (this.operand1 * this.operand1).toString();
	}

  ln()
	{
		this.subText = this.mainText;
		this.mainText = Math.log(this.operand1).toString();
	}

	 sin()
	{
		this.subText= this.mainText;
		this.mainText = Math.sin(this.operand1).toString();
	}

	 cos()
	{
		this.subText= this.mainText;
		this.mainText = Math.cos(this.operand1).toString();
	}

	 tan()
	{
		this.subText= this.mainText;
		this.mainText = Math.tan(this.operand1).toString();
	}

	  log()
	{
		this.subText = this.mainText;
		this.mainText = Math.log10(this.operand1).toString();
	}

	  exp()
	{
		this.subText = this.mainText;
		this.mainText = (Math.E * this.operand1).toString();
	}

	  factorial()
	{
		this.subText = this.mainText;
		if (this.operand1 === 0)
		{
			this.mainText = '1';
		}
		else if (this.operand1 < 0)
		{
			this.mainText = 'undefined';
		}
		else
		{
			let subtot = 1;
			for( let i = this.operand1; i>0; i-- )
			{
			  subtot *= i;
			}
        this.mainText = subtot.toString();
      }
	}

	degrees()
	{
		this.subText= this.mainText;
		this.mainText =  (this.operand1 * (180/Math.PI)).toString();
	}

  radians()
	{
		this.subText= this.mainText;
		this.mainText =  (this.operand1 * (Math.PI /180)).toString();
	}

	exponent()
	{
		this.subText = this.mainText;
		this.mainText = (Math.pow( this.operand1, this.operand2)).toString();
	}

	percent() //non funziona bene
	{
		this.subText = this.mainText;
		if (this.operand2 !== 0)
		{
			this.mainText = (this.operand1 - ((this.operand2 * this.operand1)/100 )).toString();
		}
		else
		{
			this.mainText = (this.operand1 /100).toString();
		}
	}

	pi()
	{
		this.subText = this.mainText;
		this.mainText = (Math.PI * this.operand1).toString();
	}

	 plusMinus()
	{
		this.subText = this.mainText;
		this.mainText = 'WORK IN PROGRESS';
	}


  ngOnInit(){ }
  }

