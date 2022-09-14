/* 
============================================
; Title: Assignment 6.2 - Future Value App - finance-calculator.js
; Author: Professor Krasso & Ace Baugh
; Date: 09/13/2022
; Modified By: Ace Baugh
; Description: WEB 330 Future Value App
============================================
*/

export class FinanceCalculator {
   static MONTHS_IN_YEAR = 12;

   static calculateFutureValue(monthlyPayment, years, rate) {
      const months = years * FinanceCalculator.MONTHS_IN_YEAR;
      const interestRate = 1 + rate / 100;
      const presentValue = monthlyPayment * months;
      const futureValue = presentValue * Math.pow(interestRate, months);

      return futureValue.toFixed(2);
   }

   static convertToCurrency(field) {
      let currencyFormatter = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'USD',
      });

      return currencyFormatter.format(field);
   }
}