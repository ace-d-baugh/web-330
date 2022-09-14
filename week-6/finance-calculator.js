/* 
============================================
; Title: Assignment 6.2 - Future Value App - finance-calculator.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/13/2022
; Modified By: Ace Baugh
; Description: WEB 330 Future Value App - This is the finance calculator class.
; This class will be used to calculate the future value of an investment.
; and format it to a currency.
============================================
*/

export class FinanceCalculator {
   // There are only 12 months in a year
   static MONTHS_IN_YEAR = 12;

   // Calculate the future value of an investment
   static calculateFutureValue(monthlyPayment, rate, years) {
      // Calculates months from years
      const months = years * this.MONTHS_IN_YEAR;
      // Calculates the interest rate
      const interestRate = 1 + rate / 100;
      // Calculates the present value
      const presentValue = monthlyPayment * months;
      // Calculates the future value
      const futureValue = presentValue * (Math.pow(interestRate, months));

      // Returns the future value rounded to two decimal places
      return futureValue.toFixed(2);
   }

   // Converts decimal number to currency format
   static convertToCurrency(field) {
      let currencyFormatter = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD',
      });

      return currencyFormatter.format(field);
   }
}