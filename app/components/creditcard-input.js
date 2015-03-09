import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input'
});




// isAPR: function(){
//   return this.get()
// }



/**
isBalance - FIELD
isAPR - FIELD
isDailyPercentageRate - notshown
isDaysInMonth - notshown
isInterestForMonth - notshown (isBalance * isDailyPercentageRate * isDaysInMonth)
isBalancePlusInterest - notshown
isMinimumPayment - FIELD
isBalanceAfterPayment - notshown
isPaymentToPriniciple - notshown
isPaymentToInterest - DISPLAYED maybe
isMonthsUntilZero - DISPLAYED


-----
Avg daily balance. is days x same balance added together and divided by total days.
Percentage 14 is .14, is divided by 365 (days per year)

Monthly payments = (Principal)(APR/1200 + (APR/1200)/((1+APR/1200)^Term -1))


**/

