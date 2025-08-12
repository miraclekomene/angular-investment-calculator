import { CurrencyPipe } from '@angular/common';
// USING INPUT DECORATOR
// import { Component, Input } from '@angular/core';
// OR USING IUTPUT FUNCTION
// import { Component, input } from '@angular/core';
// METHOD 2: USING SERVICE AND COMPUTED
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // METHOD 2 USING SERVICE
  private InvestmentService = inject(InvestmentService); //pass the service class name inside the decorator
  
  // get results() {
  //   return this.InvestmentService.resultsData
  // }
  // OR AS A COMPUTED VALUE
  results = computed(() => this.InvestmentService.resultsData());
  // or 
  // results = () => this.InvestmentService.resultsData.asReadonly();
  // asReadonly is a method provided by Angular,
  // which you can call on signals
  // to get a read-only version of those signals,
  // which can't be manipulated.
    

  // METHOD 1
  // USING INPUT FUNCTION
  // results = input<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]>();

  // OR using a decorator
  //   add a question mark here
  // after the property name to tell TypeScript
  // that this is an optional property,
  // which might have this value
  // or a value of this type to be precise,
  // but which might also be undefined.
  // Or we add an exclamation mark to tell TypeScript
  // that this will always be a value of this shape here.

  // question mark seems more appropriate
  // because of course if the user hasn't clicked calculate yet,
  // we won't have any results yet.
  // @Input() results?:{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];
  // the [] tells TypeScript that the type
  // of results is actually an array full
  // of objects that have this shape.
}
