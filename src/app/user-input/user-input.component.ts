// import { Component, EventEmitter, output } from '@angular/core';
// import { Component, EventEmitter, Output } from '@angular/core';
// OR USING A SIGNAL
// import { Component, EventEmitter, Output, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import type { InvestmentInput } from '../investment-input.model';
// OR USING OUTPUT FUNCTION
// import { Component, output, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import type { InvestmentInput } from '../investment-input.model';
// // METHOD 2 USING SERVICE: FROM investment.service.ts file
import { Component, signal } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // output can only be used if you are using angular 17.3 or higher
  // e.g calculate = output();
  // calculate = output<InvestmentInput>();

  // OR using a decorator
  // method 1
  // @Output() calculate = new EventEmitter<{
  //   initialInvestment: number,    // Initial amount invested
  // annualInvestment: number,     // Amount added every year
  // expectedReturn: number,       // Expected annual return in percentage
  // duration: number              // Number of years for investment
  // }>();
  // method 2: fetching the data from investment-input.model.ts file
  // @Output() calculate = new EventEmitter<InvestmentInput>();

  // two way binding. NOTE: the values gotton out of an input willalways be a string
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';
  // OR using Signal
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  // OR METHOD 2: using a service
  constructor(private investmentService: InvestmentService){}
  onSubmit() {
    // console.log("hello");
    // console.log(this.enteredInitialInvestment);
    // console.log(this.enteredAnnualInvestment);
    // console.log(this.enteredExpectedReturn);
    // console.log(this.enteredDuration);

    //  you Use the emit() no matter if you manually created
    // the event emitter or if you used the output function.
    // this.calculate.emit({
    //   initialInvestment: + this.enteredInitialInvestment,
    //   annualInvestment: +this.enteredAnnualInvestment,
    //   expectedReturn: + this.enteredExpectedReturn,
    //   duration: + this.enteredDuration,
    // })
  
    this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: + this.enteredExpectedReturn(),
      duration: + this.enteredDuration(),
    });
    
    // OR Display using data stored in the signal
    // this.calculate.emit({
    //   initialInvestment: + this.enteredInitialInvestment(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   expectedReturn: + this.enteredExpectedReturn(),
    //   duration: + this.enteredDuration(),
    // });
    
    // SET BACK TO INITIAL VALUE 
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
