// import { Component, signal } from '@angular/core';
import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
// import from investment-input,model.ts
// add the type keyword in front of it
// to make it clear that this is just a type definition.
// import type { InvestmentInput } from "./investment-input.model";
// METHOD 2 USING SERVICE: OR USING SERVICE FROM investment.service.ts file
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  // resultsData?:{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[];

  //OR using signals
  // resultsData = signal<{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[] | undefined>(undefined);
  // METHOD 2 USING SERVICE: OR USING SERVICE FROM investment.service.ts file


  // pass in a parameter
  // onCalculateInvestmentResults(data: {
  //     initialInvestment: number,    // Initial amount invested
  //   annualInvestment: number,     // Amount added every year
  //   expectedReturn: number,       // Expected annual return in percentage
  //   duration: number              // Number of years for investment
  //   }

  // Or import from investment-input.model.ts file above
  // onCalculateInvestmentResults(data: InvestmentInput) {
  //   // destructure them
  //   const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
  //   const annualData = [];
  //   let investmentValue = initialInvestment;
  
  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }
  
  //   // return annualData;
  //   // console.log(annualData);
  //   // this.resultsData = annualData

  //   // OR fetch using signal data
  //   this.resultsData.set(annualData);
    
  // }
  // METHOD 2 USING SERVICE: OR USING SERVICE FROM investment.service.ts file
}
