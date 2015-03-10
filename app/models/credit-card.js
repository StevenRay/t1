import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  balance: DS.attr('number', {defaultValue: 0}),
  apr: DS.attr('number', {defaultValue: 0}),
  payment: DS.attr('number', {defaultValue: 0}),

  interestDaily: function(){
    return (this.get('apr')*0.01)/365;
  }.property('apr'),

  interestThisPeriod: function(){
    return this.get('balance') * (this.get('interestDaily') * 31) /**days in month**/;
  }.property('balance','interestDaily'),

  balanceWithInterest: function(){
    return (Number(this.get('balance')) + this.get('interestThisPeriod')).toFixed(2);
  }.property('balance','interestThisPeriod'),

  balanceAfterPayment: function(){
    return this.get('balanceWithInterest')-this.get('payment').toFixed(2);
  }.property('balanceWithInterest', 'payment'),

 paidToPrinciple: function(){
    return this.get('payment') - this.get('interestThisPeriod').toFixed(2);
  }.property('payment', 'interestThisPeriod'),


  // monthsToZero: function(){
  //   for(this.get('balance')=this.get('balanceAfterPayment'); this.get('balance')>0; this.get('balance')-this.get('payment')){
  //     console.log('balance');
  //     //return this.get('');
  //   }
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