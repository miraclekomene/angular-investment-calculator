// create a custom object type
// with help of this interface keyword provided by TypeScript,
// which I'll name InvestmentInput
export interface InvestmentInput {
    // define the properties of the object
    initialInvestment: number,    // Initial amount invested
    annualInvestment: number,     // Amount added every year
    expectedReturn: number,       // Expected annual return in percentage
    duration: number              // Number of years for investment
      
}

// OR
//export type InvestmentInput = {
//     initialInvestment: number,    // Initial amount invested
//     annualInvestment: number,     // Amount added every year
//     expectedReturn: number,       // Expected annual return in percentage
//     duration: number              // Number of years for investment
// }