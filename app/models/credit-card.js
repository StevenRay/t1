import DS from 'ember-data';

export default DS.Model.extend({
  balance: DS.attr('number'),
  apr: DS.attr('number'),

  interestDaily: function(){
    return (this.get('apr')*0.01)/365;
  }.property('apr'),

  interestThisPeriod: function(){
    return this.get('balance')*this.get('interestDaily')*31/**days in month**/;
  }.property('balance','interestDaily'),

/** PROBLEM: Concatnating string instead of numbers**/
// fixed by adding "-1+1", seems like there should be a more elegant way to fix this.
  balanceWithInterest: function(){
    return (this.get('balance')-1)+1+(this.get('interestThisPeriod')-1+1);
  }.property('balance','interestThisPeriod'),

  payment: DS.attr('number'),

  balanceAfterPayment: function(){
    return this.get('balanceWithInterest')-this.get('payment');
  }.property('balanceWithInterest', 'payment'),

 paidToPrinciple: function(){
    return this.get('payment')-this.get('interestThisPeriod');
  }.property('payment', 'interestThisPeriod'),


  // monthsToZero: function(){
  //   //temporary
  //   // Need to ad loop to get months
  //   // Need to add && so that it requires both to return monthsToZero
  //   return (this.get('balance')-this.get('payment'));
  // }.property('balance','payment')


/**   return (this.get('balance')*(((this.get('apr')/100)/365)*this.get('daysInMonth')))+this.get('balance')-this.get('payment');
      }.property('balance','payment','apr','payment')
**/
});

/**
Balance - FIELD
APR - FIELD
DailyPercentageRate - notshown
DaysInMonth - notshown
InterestForMonth - notshown (isBalance * isDailyPercentageRate * isDaysInMonth)
BalancePlusInterest - notshown
Payment - FIELD
BalanceAfterPayment - notshown
PaymentToPriniciple - notshown
PaymentToInterest - DISPLAYED maybe
MonthsUntilZero - DISPLAYED
**/