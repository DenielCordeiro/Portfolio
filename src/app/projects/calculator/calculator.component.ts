import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass'],
  standalone: false
})
export class CalculatorComponent implements OnInit {
  valorInScreen: any = document.querySelector(".content-screen");
  arrayValors: string[] = [];
  recordingOfOperations: string[] = [];
  valorRemovedFromArray: string = '';
  sinal: string = '';

  constructor() {}

  ngOnInit(): void {}

  numberSelected(numberSelected: string) {
    this.arrayValors.push(numberSelected);
    this.valorRemovedFromArray = this.arrayValors.join("");

    if (valors.input1 == 0) {
      this.valorInScreen = this.valorRemovedFromArray
    } else {
      this.valorInScreen = valors.input1 + '   ' + this.sinal + '   ' + this.valorRemovedFromArray;
    }
  }

  operations(sinalSelected: string) {
    valors.input2 = 0;

    if (valors.input1 == 0) {
      valors.input1 = Number(this.valorRemovedFromArray);
    }

    this.sinal = sinalSelected;
    this.valorInScreen = valors.input1 + '  ' + this.sinal;
    this.valuesReset();
  }

  result() {
    if (valors.input2 == 0) {
      valors.input2 = Number(this.valorRemovedFromArray);
    }

    if (this.sinal === '+') {
      this.valorInScreen = calculator.Sum(valors);
      this.recordingOfOperations.push(`${valors.input1} + ${valors.input2} = ${this.valorInScreen}`);  
      
      
      localStorage.setItem('registration: ', JSON.stringify(this.recordingOfOperations));

      valors.input1 = calculator.Sum(valors);
    } else if (this.sinal === '-') {
      this.valorInScreen = calculator.Subtraction(valors);
      this.recordingOfOperations.push(`${valors.input1} - ${valors.input2} = ${this.valorInScreen}`);  
      
      localStorage.setItem('registration: ', JSON.stringify(this.recordingOfOperations));

      valors.input1 = calculator.Subtraction(valors);
    } else if (this.sinal === '*') {
      this.valorInScreen = calculator.Multiplication(valors);
      this.recordingOfOperations.push(`${valors.input1} x ${valors.input2} = ${this.valorInScreen}`);  
      
      localStorage.setItem('registration: ', JSON.stringify(this.recordingOfOperations));

      valors.input1 = calculator.Multiplication(valors);
    } else if (this.sinal === '/') {
      this.valorInScreen = calculator.Division(valors);
      this.recordingOfOperations.push(`${valors.input1} / ${valors.input2} = ${this.valorInScreen}`);  
      
      localStorage.setItem('registration: ', JSON.stringify(this.recordingOfOperations));

      valors.input1 = calculator.Division(valors);
    } else {
      alert("[ERROR !]: no operation signal has been entered");
    }

    this.resetInputsAndSinal();
    this.valuesReset();
  }

  valuesReset() {
    this.arrayValors = [];
  }

  resetInputsAndSinal(): Inputs {
    valors.input2 = 0;

    this.sinal = '';

    return valors;
  }

  cleanScreenContent() {
    valors.input1 = 0;

    this.resetInputsAndSinal();
    this.valuesReset();
    this.valorInScreen = '';
    this.valorRemovedFromArray = '';
  }

  
}

export class Inputs {
  input1: number = 0;
  input2: number = 0;
}
export const valors = new Inputs();

class Calculator {
  Sum(valors: Inputs): number {
    const resultSum = valors.input1 + valors.input2;
    
    return parseFloat(resultSum.toFixed(2));
  }

  Subtraction(valors: Inputs): number {
    const resultSubtraction = valors.input1 - valors.input2;

    return parseFloat(resultSubtraction.toFixed(2));
  }

  Multiplication(valors: Inputs): number {
    const resultMultiplication = valors.input1 * valors.input2;

    return parseFloat(resultMultiplication.toFixed(2));
  }

  Division(valors: Inputs): number {
    const resultDivision = valors.input1 / valors.input2;

    return parseFloat(resultDivision.toFixed(2));
  }
}

const calculator = new Calculator();
