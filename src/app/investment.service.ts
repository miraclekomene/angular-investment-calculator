import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";
// This will make sure that Angular is able
// to inject that service,
// and that components can request that service to be injected.
@Injectable({
    providedIn: 'root'

})
export class InvestmentService{
    // resultsData?: {
    //     year: number,
    //     interest: number,
    //     valueEndOfYear: number,
    //     annualInvestment: number,
    //     totalInterest: number,
    //     totalAmountInvested: number,
    // }[];
    // OR USING SIGNAL
    resultsData = signal<{
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
    }[] | undefined>(undefined); //this signal holds undefined values
    // This is a class that will be used to interact with the API
    calculateInvestmentResults(data: InvestmentInput) {
        // destructure them
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
        // return annualData;
        // console.log(annualData);
        // this.resultsData = annualData
    
        // OR fetch using signal data
        this.resultsData.set(annualData);
        
      }     

}